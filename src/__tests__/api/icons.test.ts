import { createMocks } from 'node-mocks-http';
import getIconsByPageHandler from "../../pages/api/icons";
import { SimpleIcon } from '../../types';

describe("API Route: /api/icons", () => {
  describe("Testing paginations and limits", () => {
    it("should get first page with 12 items", async () => {
      const { req, res } = createMocks({
        method: 'GET',
        query: {
          page: 0,
          limit: 12
        },
      });

      await getIconsByPageHandler(req, res);
      const data = JSON.parse(res._getData());

      expect(res._getStatusCode()).toBe(200);
      expect(data).toHaveLength(12);
    });

    it("should get first page with 36 items", async () => {
      const { req, res } = createMocks({
        method: 'GET',
        query: {
          page: 0,
          limit: 36
        },
      });

      await getIconsByPageHandler(req, res);
      const data = JSON.parse(res._getData());

      expect(res._getStatusCode()).toBe(200);
      expect(data).toHaveLength(36);
    });

    it("should be different between the first page and the second page", async () => {
      const { req: firstReq, res: firstRes } = createMocks({
        method: 'GET',
        query: {
          page: 0,
          limit: 12
        },
      });

      await getIconsByPageHandler(firstReq, firstRes);
      const firstFetchData = JSON.parse(firstRes._getData());

      expect(firstRes._getStatusCode()).toBe(200);
      expect(firstFetchData).toHaveLength(12);

      const { req: secondReq, res: secondRes } = createMocks({
        method: 'GET',
        query: {
          page: 1,
          limit: 12
        },
      });

      await getIconsByPageHandler(secondReq, secondRes);
      const secondFetchData = JSON.parse(secondRes._getData());

      expect(secondRes._getStatusCode()).toBe(200);
      expect(secondFetchData).toHaveLength(12);

      expect(firstFetchData).not.toEqual(secondFetchData);
    });
  });

  describe('Testing search query', () => {
    it("should get a perfect match", async () => {
      const { req, res } = createMocks({
        method: 'GET',
        query: {
          page: 0,
          limit: 12,
          search: 'jest'
        },
      });

      await getIconsByPageHandler(req, res);
      const data: SimpleIcon[] = JSON.parse(res._getData());

      const sampleData: SimpleIcon = data[0];
      expect(res._getStatusCode()).toBe(200);

      expect(sampleData.title).toBe('Jest');
      expect(sampleData.slug).toBe('jest');
    })

    it("should get a couple of similar items", async () => {
      const { req, res } = createMocks({
        method: 'GET',
        query: {
          page: 0,
          limit: 6,
          search: 'react'
        },
      });

      await getIconsByPageHandler(req, res);
      const data: SimpleIcon[] = JSON.parse(res._getData());

      expect(res._getStatusCode()).toBe(200);

      data.forEach(icon => {
        expect(icon.title).toMatch(/react/i);
        expect(icon.slug).toMatch(/react/i);
      });
    })
  })
})

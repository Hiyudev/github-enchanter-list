import { createMocks } from 'node-mocks-http';
import { Badge } from '../../@types';
import getBadgesHandler from "../../pages/api/badges";

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

      await getBadgesHandler(req, res);
      const data = JSON.parse(res._getData());

      expect(res._getStatusCode()).toBe(200);
      expect(data.badges).toHaveLength(12);
    });

    it("should get first page with 36 items", async () => {
      const { req, res } = createMocks({
        method: 'GET',
        query: {
          page: 0,
          limit: 36
        },
      });

      await getBadgesHandler(req, res);
      const data = JSON.parse(res._getData());

      expect(res._getStatusCode()).toBe(200);
      expect(data.badges).toHaveLength(36);
    });

    it("should be different between the first page and the second page", async () => {
      const { req: firstReq, res: firstRes } = createMocks({
        method: 'GET',
        query: {
          page: 0,
          limit: 12
        },
      });

      await getBadgesHandler(firstReq, firstRes);
      const firstFetchData = JSON.parse(firstRes._getData());

      expect(firstRes._getStatusCode()).toBe(200);
      expect(firstFetchData.badges).toHaveLength(12);

      const { req: secondReq, res: secondRes } = createMocks({
        method: 'GET',
        query: {
          page: 1,
          limit: 12
        },
      });

      await getBadgesHandler(secondReq, secondRes);
      const secondFetchData = JSON.parse(secondRes._getData());

      expect(secondRes._getStatusCode()).toBe(200);
      expect(secondFetchData.badges).toHaveLength(12);

      expect(firstFetchData.badges).not.toEqual(secondFetchData.badges);
    });
  });

  describe('Testing search query', () => {
    it("should get a perfect match", async () => {
      const { req, res } = createMocks({
        method: 'GET',
        query: {
          page: 0,
          limit: 12,
          search: 'jest',
          style: 'for-the-badge'
        },
      });

      await getBadgesHandler(req, res);
      const { badges }: { badges: Badge[] } = JSON.parse(res._getData());

      const sampleBadge: Badge = badges[0];
      expect(res._getStatusCode()).toBe(200);

      expect(sampleBadge.name).toBe('Jest');
      expect(sampleBadge.url).toBe('https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white');
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

      await getBadgesHandler(req, res);
      const { badges }: { badges: Badge[] } = JSON.parse(res._getData());

      expect(res._getStatusCode()).toBe(200);

      badges.forEach(badge => {
        expect(badge.name).toMatch(/react/i);
      });
    })
  })
})

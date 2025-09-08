import { XMLParser } from 'fast-xml-parser';
export const config = { runtime: 'edge' };

const FEED_URL = 'https://medium.com/feed/@mouzakitis.m89';

export default async function handler() {
  try {
    const r = await fetch(FEED_URL, { headers: { 'User-Agent': 'portfolio-fetcher/1.0' } });
    if (!r.ok) return json({ error: `Medium RSS failed: ${r.status}` }, 500);

    const xml = await r.text();
    const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '' });
    const data = parser.parse(xml);

    const items = (data?.rss?.channel?.item ?? []).map((it) => {
      let categories = [];
      if (Array.isArray(it.category)) {
        categories = it.category;
      } else if (it.category) {
        categories = [it.category];
      }
      return {
        title: it.title,
        link: it.link,
        pubDate: it.pubDate,
        categories,
        content: it['content:encoded'] || it.description || '',
        thumbnail: extractImage(it['content:encoded'] || it.description || ''),
      };
    });

    return json({ items }, 200, { 'cache-control': 's-maxage=3600, stale-while-revalidate=86400' });
  } catch (e) {
    return json({ error: e?.message ?? 'Unknown error' }, 500);
  }
}

function extractImage(html) {
  const m = html?.match(/<img[^>]+src="([^">]+)"/i);
  return m ? m[1] : null;
}
function json(body, status = 200, headers = {}) {
  return new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json', ...headers } });
}

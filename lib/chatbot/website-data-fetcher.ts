import axios from 'axios';
import * as cheerio from 'cheerio';

interface WebsiteData {
  title: string;
  content: string;
  links: string[];
}

export class WebsiteDataFetcher {
  public async fetchData(url: string): Promise<WebsiteData | null> {
    try {
      const response = await axios.get(url);
      const html = response.data;
      const $ = cheerio.load(html);

      const title = $('title').text();
      const content = $('body').text(); // A simple text extraction
      const links = Array.from($('a')).map(el => $(el).attr('href')).filter((href): href is string => !!href);

      return {
        title,
        content,
        links,
      };
    } catch (error) {
      console.error('Error fetching website data:', error);
      return null;
    }
  }
}
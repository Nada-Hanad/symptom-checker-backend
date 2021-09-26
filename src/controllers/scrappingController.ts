const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
import { Request, Response } from "express";

export const fetchHtml = async (req: Request, res: Response) => {
  const url = req.query.url;
  try {
    // launch broser
    const browser = await puppeteer.launch();
    // Launch page
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(0);
    // Navigate to url
    const data = await (await page.goto(url)).text();
    const $ = cheerio.load(data);
    const titlesElements = $("h2.entry-title")
      .toArray()
      .map((e: any) => $(e).text());
    // const titlesText = titlesElements.map(e => )

    console.log(titlesElements);

    // 1- click sur la div
    await browser.close();
    res.json(titlesElements);
  } catch (err) {
    console.log(err);
    console.error(
      `ERROR: An error occurred while trying to fetch the URL: ${url}`
    );
  }
};

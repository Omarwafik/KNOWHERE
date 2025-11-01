import fs from "fs";
import path from "path";

const BASE_URL = "https://knowhere-eg.com";

const pages = [
  "/", 
  "/SharedAreas",
  "/SharedAreas/SharedArea1",
  "/SharedAreas/SharedArea2",
  "/SharedAreas/SharedArea3",
  "/MeetingRooms",
  "/MeetingRooms/SingleRoom",
  "/MeetingRooms/SmallMeetingRoom",
  "/MeetingRooms/BigMeetingRoom",
  "/MeetingRooms/ExMeetingRoom",
  "/MeetingRooms/V10",
  "/MeetingRooms/V4",
  "/MeetingRooms/LectureRoom",
  "/Office",
  "/Office/ExOffice",
  "/Office/RoofOffice",
  "/Office/Partitions",
  "/Office/RoofBigOffices",
  "/VirtualOffice",
  "/signup",
  "/login",
];

// لو عندك صفحات rooms بتتولد ديناميكياً، ممكن تضيفهم يدوي بعدين
// أو لو عندك بيانات جاهزة ممكن تعمل loop هنا.

const urls = pages
  .map((page) => {
    return `
  <url>
    <loc>${BASE_URL}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === "/" ? "1.0" : "0.8"}</priority>
  </url>`;
  })
  .join("");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${urls}
</urlset>`;

const outputPath = path.resolve("./public/sitemap.xml");
fs.writeFileSync(outputPath, sitemap);

// console.log("✅ Sitemap generated successfully at public/sitemap.xml");

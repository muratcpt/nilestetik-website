// Pollinations.ai (FLUX) sequential image generator — no API key.
// Tema: Roz Gold & Antrasit · saç çoğaltma + cilt bakımı + lazer · premium klinik.
// Çalıştır: node scripts/gen-images.mjs
import { writeFile, stat } from "node:fs/promises";
import { setTimeout as sleep } from "node:timers/promises";

const OUT = "public/images";
const STYLE =
  "elegant luxury beauty clinic aesthetic, warm rose gold and champagne tones, " +
  "soft cream charcoal palette, cinematic soft lighting, high-end editorial, " +
  "clean minimal, professional photography, no text, no watermark";

const IMAGES = [
  ["hero-main", 1100, 1320, "beautiful woman with healthy glowing skin and voluminous shiny hair, serene spa portrait, " + STYLE],
  ["hero-side", 820, 900, "close up of luxurious healthy hair strands flowing, silky shine, " + STYLE],
  ["about-clinic", 1000, 1200, "interior of a modern luxury beauty and hair restoration clinic, rose gold accents, plush reception, " + STYLE],
  ["feature-sac", 1200, 900, "trichologist examining client scalp with hair analysis device, modern clinic, hopeful warm mood, " + STYLE],
  ["svc-sac-cogaltma", 900, 900, "dramatic before after thick voluminous restored hair on woman, confident, " + STYLE],
  ["svc-sac-kiran", 900, 900, "gentle scalp treatment session, hands applying serum to hair roots, " + STYLE],
  ["svc-sac-mezoterapi", 900, 900, "hair mesotherapy vitamin scalp treatment, fine needle device, clinical elegant, " + STYLE],
  ["svc-sac-bakimi", 900, 900, "professional luxury hair care treatment, glossy nourished hair, salon, " + STYLE],
  ["svc-sac-analizi", 900, 900, "digital scalp and hair analysis on a screen, magnified follicles, modern device, " + STYLE],
  ["svc-cilt-bakimi", 900, 900, "relaxing facial skincare treatment on woman, glowing radiant skin, spa, " + STYLE],
  ["svc-aquaglow", 900, 900, "hydrafacial aqua glow deep cleansing facial, dewy luminous skin, " + STYLE],
  ["svc-cilt-analizi", 900, 900, "skin analysis with diagnostic device on woman face, professional clinic, " + STYLE],
  ["svc-leke", 900, 900, "even radiant clear complexion close up, pigmentation treatment result, " + STYLE],
  ["svc-genclestirme", 900, 900, "anti aging skin rejuvenation treatment, firm youthful glow, elegant, " + STYLE],
  ["svc-lazer", 900, 900, "laser hair removal treatment on smooth skin, modern device, clinical, " + STYLE],
  ["svc-erkek", 900, 900, "handsome man with healthy restored hair and groomed skin, confident portrait, " + STYLE],
  ["gallery-1", 800, 800, "luxury hair restoration result, full healthy hairline, woman smiling, " + STYLE],
  ["gallery-2", 800, 800, "glowing flawless facial skin close up after treatment, " + STYLE],
  ["gallery-3", 800, 800, "serene treatment room with rose gold details and plush chair, " + STYLE],
  ["gallery-4", 800, 800, "smooth radiant skin after laser treatment, elegant, " + STYLE],
  ["gallery-5", 800, 800, "shiny voluminous styled hair after care, editorial beauty, " + STYLE],
  ["gallery-6", 800, 800, "happy client relaxing during spa facial, warm ambiance, " + STYLE],
  ["og-cover", 1200, 630, "luxury beauty and hair restoration clinic banner, woman with glowing skin and healthy hair, " + STYLE],
];

const enough = async (p) => {
  try { return (await stat(p)).size > 14000; } catch { return false; }
};

async function gen([name, w, h, prompt], i) {
  const path = `${OUT}/${name}.jpg`;
  if (await enough(path)) { console.log(`skip  ${name} (var)`); return; }
  const seed = 1000 + i * 7;
  const url =
    `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}` +
    `?width=${w}&height=${h}&model=flux&seed=${seed}&nologo=true&enhance=true`;
  for (let attempt = 1; attempt <= 5; attempt++) {
    try {
      const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
      if (!res.ok) throw new Error("HTTP " + res.status);
      const buf = Buffer.from(await res.arrayBuffer());
      const head = buf.subarray(0, 64).toString("utf8").toLowerCase();
      if (buf.length < 14000 || head.includes("queue") || head.includes("error")) {
        throw new Error("bad/small (" + buf.length + ")");
      }
      await writeFile(path, buf);
      console.log(`ok    ${name}  ${(buf.length / 1024 | 0)}KB  (deneme ${attempt})`);
      return;
    } catch (e) {
      console.log(`retry ${name}  ${e.message}  (deneme ${attempt})`);
      await sleep(5000);
    }
  }
  console.log(`FAIL  ${name}`);
}

for (let i = 0; i < IMAGES.length; i++) {
  await gen(IMAGES[i], i);
  await sleep(4000);
}
console.log("=== bitti ===");

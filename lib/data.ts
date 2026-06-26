// ════════ NİL ESTETİK — Tek gerçek veri kaynağı ════════
// Tüm bilgiler Google İşletme + Instagram @nil.estetik kaynaklıdır.

export const SALON = {
  name: "Nil Estetik",
  fullName: "Nil Estetik Güzellik Salonu",
  tagline: "Saç Çoğaltma & Güzellik Merkezi",
  city: "Çanakkale",
  phone: "0551 531 00 17",
  phoneRaw: "+905515310017",
  whatsapp: "https://wa.me/905515310017",
  address:
    "Kemal Paşa Mah., Kemalyeri Sok. No:61, Perçin Apartmanı, Kat 2 D:2, 17000 Çanakkale Merkez / Çanakkale",
  addressShort: "Kemal Paşa Mah., Çanakkale Merkez",
  instagram: "https://www.instagram.com/nil.estetik/",
  instagramHandle: "@nil.estetik",
  // Google Maps embed — metin araması (koordinat değil, doğru yer için)
  mapQuery:
    "Nil Estetik Güzellik Salonu, Kemal Paşa Mahallesi Kemalyeri Sokak No:61, Çanakkale Merkez",
  rating: 5.0,
  reviewCount: 14,
  followers: "2.000+",
  hours: {
    weekdays: "09:00 – 19:00",
    saturday: "09:00 – 19:00",
    sunday: "Kapalı",
  },
};

export type Service = {
  id: string;
  slug: string;
  name: string;
  shortDesc: string;
  desc: string;
  icon: string;
  image: string;
  category: "sac" | "cilt" | "lazer" | "erkek";
  duration: string;
  popular?: boolean;
  new?: boolean;
};

// Hizmetler — saç çoğaltma + cilt + lazer odaklı (FİYAT YOK).
export const SERVICES: Service[] = [
  {
    id: "sac-cogaltma", slug: "sac-cogaltma", name: "Saç Çoğaltma",
    shortDesc: "Kaybedilen saçı kişiye özel protokolle geri kazandırma",
    desc: "Kişiye özel uyguladığımız protokollerle kaybedilmiş saçı geri kazanıyoruz. Uygulama sonrası saatler içinde daha yoğun ve estetik bir saç görünümüne kavuşursunuz; sonuç cilt yapınıza bağlı olarak ortalama 3–5 yıl kalıcıdır.",
    icon: "🌱", image: "/images/svc-sac-cogaltma.jpg", category: "sac", duration: "İlk seans 2–3 saat", popular: true,
  },
  {
    id: "sac-kiran", slug: "sac-kiran", name: "Saç Kıran Tedavisi",
    shortDesc: "Saç dökülmesi ve saç kıran için seanslı tedavi",
    desc: "Saç kıran (alopesi) ve bölgesel dökülmelerde, seanslar boyunca uygulanan tedavi ile yeni saç çıkışını destekliyoruz. Müşterilerimiz birkaç seansta yeni bebek saçlarının geldiğini görüyor.",
    icon: "🩺", image: "/images/svc-sac-kiran.jpg", category: "sac", duration: "Seanslı program", popular: true,
  },
  {
    id: "sac-mezoterapi", slug: "sac-mezoterapi", name: "Saç Mezoterapisi",
    shortDesc: "Saç köküne vitamin ve mineral takviyesi",
    desc: "Saç köklerini güçlendiren vitamin, mineral ve aminoasit karışımıyla dökülmeyi azaltır, daha güçlü ve sağlıklı bir saç yapısı kazandırırız.",
    icon: "💧", image: "/images/svc-sac-mezoterapi.jpg", category: "sac", duration: "30–45 dk",
  },
  {
    id: "sac-bakimi", slug: "sac-bakimi", name: "Saç Bakımı",
    shortDesc: "Yıpranmış saça onarıcı bakım protokolü",
    desc: "Yıpranmış ve cansız saçlar için derinlemesine besleyen, parlaklık ve canlılık kazandıran profesyonel bakım uygulaması.",
    icon: "✨", image: "/images/svc-sac-bakimi.jpg", category: "sac", duration: "45–60 dk",
  },
  {
    id: "sac-analizi", slug: "sac-analizi", name: "Ücretsiz Saç Analizi",
    shortDesc: "Saç telini ve saç derisini ücretsiz inceleme",
    desc: "Dijital cihazla saç teli ve saç derinizi ücretsiz analiz ederek, ihtiyacınıza en uygun tedavi planını birlikte belirliyoruz.",
    icon: "🔬", image: "/images/svc-sac-analizi.jpg", category: "sac", duration: "20 dk", new: true,
  },
  {
    id: "cilt-bakimi", slug: "cilt-bakimi", name: "Cilt Bakımı",
    shortDesc: "Cilt tipinize özel derin temizlik ve bakım",
    desc: "Cilt analizine göre kişiye özel protokollerle derin temizlik, nemlendirme ve canlandırma; hijyenik ortamda konforlu bir deneyim.",
    icon: "🌸", image: "/images/svc-cilt-bakimi.jpg", category: "cilt", duration: "45–60 dk", popular: true,
  },
  {
    id: "aquaglow", slug: "aquaglow", name: "AquaGlow Cilt Bakımı",
    shortDesc: "Derin temizlik + ışıltı veren yoğun nem",
    desc: "AquaGlow ile gözeneklerin derin temizliği ve yoğun nem desteği; ilk seanstan itibaren ışıltılı, taze ve dinlenmiş bir cilt görünümü.",
    icon: "💦", image: "/images/svc-aquaglow.jpg", category: "cilt", duration: "50 dk", new: true,
  },
  {
    id: "cilt-analizi", slug: "cilt-analizi", name: "Cilt Analizi",
    shortDesc: "Cilt yapınızı cihazla profesyonel analiz",
    desc: "Cildinizi profesyonel cihazla analiz ederek nem, gözenek ve leke durumuna en uygun bakım planını oluşturuyoruz.",
    icon: "🔎", image: "/images/svc-cilt-analizi.jpg", category: "cilt", duration: "20 dk",
  },
  {
    id: "leke-tedavisi", slug: "leke-tedavisi", name: "Leke Tedavisi",
    shortDesc: "Güneş ve cilt lekelerine yönelik bakım",
    desc: "Cilt tonu eşitsizlikleri ve lekelere yönelik, cilt tipinize uygun aydınlatıcı ve dengeleyici bakım protokolü.",
    icon: "🤍", image: "/images/svc-leke.jpg", category: "cilt", duration: "30–45 dk",
  },
  {
    id: "cilt-genclestirme", slug: "cilt-genclestirme", name: "Cilt Gençleştirme",
    shortDesc: "Sıkılaştıran ve canlandıran anti-aging bakım",
    desc: "Cildi sıkılaştıran ve canlandıran uygulamalarla daha genç, dolgun ve pürüzsüz bir görünüm hedefliyoruz.",
    icon: "🌷", image: "/images/svc-genclestirme.jpg", category: "cilt", duration: "45 dk",
  },
  {
    id: "lazer-epilasyon", slug: "lazer-epilasyon", name: "Lazer Epilasyon",
    shortDesc: "Güvenli, etkili ve kalıcı tüy azaltma",
    desc: "Cilt analizi ve hijyenik uygulama ile tüm vücutta güvenli, etkili ve kalıcı tüy azaltma. Konforlu ve hızlı seanslar.",
    icon: "🔆", image: "/images/svc-lazer.jpg", category: "lazer", duration: "15–60 dk", popular: true,
  },
  {
    id: "erkek-bakim", slug: "erkek-bakim", name: "Erkeklere Özel",
    shortDesc: "Beylere saç çoğaltma ve cilt bakımı",
    desc: "Beylerimize özel saç çoğaltma, saç bakımı ve cilt bakımı uygulamalarıyla bakımlı, güçlü ve doğal bir görünüm.",
    icon: "🧔", image: "/images/svc-erkek.jpg", category: "erkek", duration: "Değişken",
  },
];

// GERÇEK Google yorumları (doğrulanmış 5/5 — birebir).
export const TESTIMONIALS = [
  {
    name: "Esra Yağmur Sever",
    text: "Cilt bakımı yaptırma şansım oldu. Sonuçtan çok çok memnun kaldık. Daha önceki deneyimlerime istinaden yazıyorum: ortam çok hijyenik, güler yüz, ikram sonsuz.",
    services: "Cilt Bakımı", rating: 5, time: "4 ay önce",
  },
  {
    name: "Betül Köseoğlu",
    text: "Tavsiye üzerine gittim. Öncelikle merkez çok temiz, bu gerçekten en önem verdiğim şeylerden biri. Saç kıran tedavisi için gittim, 3 seansımı tamamladım, yeni bebek saçları gelmeye başladı.",
    services: "Saç Kıran Tedavisi", rating: 5, time: "9 ay önce",
  },
  {
    name: "M. L. K.",
    text: "Merkezde cilt analizi yaptırdım, cildime uygun protokollü bakım yaptılar, inanılmaz memnun kaldım. Şimdi lazere başladım, herkese tavsiye ederim :)",
    services: "Cilt Analizi · Lazer Epilasyon", rating: 5, time: "9 ay önce",
  },
];

// İstatistik bandı (sayılan veya statik metin)
export const STATS = [
  { to: 5, decimals: 1, suffix: "", label: "Google Puanı", sub: "5.0 / 5" },
  { text: SALON.followers, label: "Instagram Takipçi", sub: "@nil.estetik" },
  { to: 12, suffix: "", label: "Uzman Hizmet", sub: "Saç · Cilt · Lazer" },
  { text: "İlk & Tek", label: "Çanakkale'de", sub: "Saç Çoğaltma" },
];

// Değerlerimiz (hakkımızda + ana sayfa)
export const VALUES = [
  { icon: "🔬", title: "Ücretsiz Analiz", desc: "Saç ve cilt analiziniz tamamen ücretsiz; tedavi öncesi net bir yol haritası." },
  { icon: "🧼", title: "Hijyen & Sterilizasyon", desc: "Her uygulamada tek kullanımlık malzeme ve titiz sterilizasyon." },
  { icon: "🎯", title: "Kişiye Özel Protokol", desc: "Standart değil; sizin saç ve cilt yapınıza göre planlanan uygulamalar." },
  { icon: "👩‍⚕️", title: "Uzman Ekip", desc: "Deneyimli ekibimizle güvenli ve konforlu bir bakım deneyimi." },
  { icon: "⏳", title: "Kalıcı Sonuç", desc: "Saç çoğaltmada ortalama 3–5 yıl kalıcı, doğal görünüm." },
  { icon: "📍", title: "Merkezi Konum", desc: "Çanakkale Merkez'de, kolay ulaşılabilir konumda hizmet." },
];

// Saç çoğaltma süreci (3 adım — feature bölümü)
export const PROCESS = [
  { step: "01", title: "Ücretsiz Saç Analizi", desc: "Saç teliniz ve saç deriniz dijital cihazla ücretsiz incelenir, ihtiyaçlarınız belirlenir." },
  { step: "02", title: "Kişiye Özel Protokol", desc: "Analiz sonucuna göre yalnızca size uygun, kişiye özel saç çoğaltma protokolü planlanır." },
  { step: "03", title: "Yoğun & Kalıcı Saç", desc: "Uygulama sonrası saatler içinde daha yoğun, ortalama 3–5 yıl kalıcı doğal bir saç görünümü." },
];

// Sık sorulan sorular
export const FAQ = [
  { q: "Saç çoğaltma kimlere uygundur?", a: "Saç dökülmesi, seyrelme ya da bölgesel saç kaybı yaşayan kadın ve erkeklerin çoğu için uygundur. Net cevap için ücretsiz saç analizi öneriyoruz." },
  { q: "Sonuç ne kadar kalıcı?", a: "Uygulama sonrası saatler içinde yoğun bir görünüm elde edilir; cilt yapısına bağlı olarak sonuç ortalama 3–5 yıl kalıcıdır." },
  { q: "Saç ve cilt analizi ücretli mi?", a: "Hayır. Saç ve cilt analizimiz tamamen ücretsizdir; size en uygun planı birlikte belirliyoruz." },
  { q: "Erkekler de yararlanabilir mi?", a: "Evet, beylerimize özel saç çoğaltma, saç bakımı ve cilt bakımı uygulamalarımız mevcuttur." },
];

// Galeri öğeleri
export const GALLERY = [
  { image: "/images/gallery-1.jpg", title: "Saç Çoğaltma Sonucu", category: "sac", tag: "Saç" },
  { image: "/images/gallery-2.jpg", title: "Işıltılı Cilt Bakımı", category: "cilt", tag: "Cilt" },
  { image: "/images/gallery-3.jpg", title: "Merkezimizden", category: "salon", tag: "Merkez" },
  { image: "/images/gallery-4.jpg", title: "Lazer Epilasyon", category: "lazer", tag: "Lazer" },
  { image: "/images/gallery-5.jpg", title: "Saç Bakımı & Parlaklık", category: "sac", tag: "Saç" },
  { image: "/images/gallery-6.jpg", title: "Mutlu Müşterilerimiz", category: "salon", tag: "Merkez" },
];

export const GALLERY_FILTERS = [
  { key: "all", label: "Tümü" },
  { key: "sac", label: "Saç" },
  { key: "cilt", label: "Cilt" },
  { key: "lazer", label: "Lazer" },
  { key: "salon", label: "Merkez" },
];

export const TIME_SLOTS = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30",
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
  "17:00", "17:30", "18:00", "18:30",
];

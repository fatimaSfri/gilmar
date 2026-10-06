import ReviewsSlider, { type Review } from "./ReviewsSlider";
import SectionContainer from "@/components/common/SectionContainer";
import SectionTextBlock from "@/components/common/SectionTextBlock";
import IconBadge from "@/components/common/IconBadge";

const REVIEWS: Review[] = [
  {
    id: 0,
    name: "احسان عبدی پور",
    text: "اقامت در گیلمار یکی از بهترین تجربه‌های سفر من بود. فضای کاملاً آرام، طبیعت بکر و مهمان‌نوازی صمیمی باعث شد چند روزی که اینجا بودم واقعاً از هیاهوی شهر دور بشم.",
    avatar: "/avatars/a.png",
  },
  {
    id: 1,
    name: "سارا احمدی",
    text: "اتاق‌ها تمیز و منظره‌ی دریا فوق‌العاده بود.",
    avatar: "/avatars/c.png",
  },
  {
    id: 2,
    name: "محمد کریمی",
    text: "صبحانه عالی بود و موقعیت مکانی هم عالی بود.",
    avatar: "/avatars/a.png",
  },
  {
    id: 3,
    name: "مریم حسینی",
    text: "برای سفر خانوادگی انتخاب خوبی بود، حتماً دوباره می‌آییم.",
    avatar: "/avatars/e.png",
  },
  {
    id: 4,
    name: "رضا محمدی",
    text: "امکانات رفاهی کامل بود و برخورد پذیرش بسیار حرفه‌ای بود.",
    avatar: "/avatars/b.png",
  },
  {
    id: 5,
    name: "نرگس صادقی",
    text: "فضای هتل دنج بود و آرامش خوبی داشتیم.",
    avatar: "/avatars/e.png",
  },
  {
    id: 6,
    name: "حسنا موسوی",
    text: "قیمت مناسب و کیفیت خدمات بالاتر از انتظار بود.",
    avatar: "/avatars/c.png",
  },
  {
    id: 7,
    name: "فربد نوری",
    text: "رستوران هتل عالی بود و غذاها تازه و خوش‌طعم بودند.",
    avatar: "/avatars/d.png",
  },
];

export default function GuestReviews() {
  return (
    <SectionContainer maxWidth={1169} sx={{ paddingInline: 0, overflow: "hidden" }}>
      {/* Header */}
      <SectionTextBlock
        align="center"
        icon={<IconBadge icon="/icons/section/chat-round-line.svg" />}
        title="گیلمار از نگاه مهمانان"
        description="تجربه واقعی مهمانان، بهترین روایت از آرامش، طبیعت و حال خوب گیلمار است."
        sx={{ marginBlockEnd: "-40px" }}
      />

      {/* Slider */}
      <ReviewsSlider reviews={REVIEWS} />
    </SectionContainer>
  );
}
import type { ImageMetadata } from "astro";
import appHome from "../assets/home/images/app-home.png";
import demoLuxury from "../assets/home/images/demo-luxury.png";
import demoTech from "../assets/home/images/demo-tech.png";
import demoClassic from "../assets/home/images/demo-classic.png";
import demoFresh from "../assets/home/images/demo-fresh.png";
import scenePreview from "../designs/images/scene-preview.png";
import dashboardPreview from "../designs/images/dashboard-preview.png";
import brand from "../assets/home/icons/brand.svg";
import featureLanguage from "../assets/home/icons/feature-language.png";
import featureTrophy from "../assets/home/icons/feature-trophy.png";
import featureProductList from "../assets/home/icons/feature-product-list.png";
import featureCart from "../assets/home/icons/feature-cart.png";
import featureResults from "../assets/home/icons/feature-latest-results.png";
import featureCampaign from "../assets/home/icons/feature-campaign.png";
import featureMembership from "../assets/home/icons/feature-membership.png";
import featureWheel from "../assets/home/icons/feature-wheel.png";
import featureDashboard from "../assets/home/icons/feature-dashboard.png";
import featureApp from "../assets/home/icons/feature-app.png";
import sceneHome from "../assets/home/icons/scene-home.png";
import sceneProduct from "../assets/home/icons/scene-product.png";
import sceneCampaign from "../assets/home/icons/scene-campaign.png";
import sceneContact from "../assets/home/icons/scene-contact.png";
import growthAcquisition from "../assets/home/icons/growth-acquisition.png";
import growthRetention from "../assets/home/icons/growth-retention.png";
import growthCampaign from "../assets/home/icons/growth-campaign.png";
import menuIcon from "../assets/home/icons/menu.png";
import footerTelegram from "../assets/home/icons/footer-telegram.png";
import footerQQ from "../assets/home/icons/QQ.png";
import footerFeatures from "../assets/home/icons/footer-feature-list.png";
import footerPricing from "../assets/home/icons/footer-pricing.png";
import complianceShield from "../assets/home/icons/compliance-shield.png";
export interface Feature {
  name: string;
  mobileName: string;
  description: string;
  icon: ImageMetadata;
}

export interface Demo {
  name: string;
  badge: string;
  description: string;
  image: ImageMetadata;
}

export interface Package {
  name: string;
  price: string;
  description: string;
  badge?: string;
  features: string[];
}

export const assets = {
  appHome,
  scenePreview,
  dashboardPreview,
  brand,
  menuIcon,
  footerTelegram,
  footerFeatures,
  footerQQ,
  footerPricing,
  complianceShield,
};

export const features: Feature[] = [
  { name: "多语言展示", mobileName: "多语言", description: "全球语言视觉", icon: featureLanguage },
  { name: "商品夺宝", mobileName: "夺宝", description: "进度开奖展示", icon: featureTrophy },
  { name: "商品列表", mobileName: "商品", description: "分类筛选浏览", icon: featureProductList },
  { name: "购物车页面", mobileName: "购物车", description: "加购结算路径", icon: featureCart },
  { name: "最新揭晓", mobileName: "揭晓", description: "开奖状态提示", icon: featureResults },
  { name: "活动入口", mobileName: "活动", description: "营销活动入口", icon: featureCampaign },
  { name: "会员样式", mobileName: "会员", description: "积分权益样式", icon: featureMembership },
  { name: "大转盘页面", mobileName: "转盘", description: "抽奖玩法页面", icon: featureWheel },
  { name: "数据看板样式", mobileName: "数据", description: "运营数据看板", icon: featureDashboard },
  { name: "App 页面预览", mobileName: "App", description: "移动界面预览", icon: featureApp },
];

export const demos: Demo[] = [
  { name: "轻奢标准版", badge: "主推", description: "多语言视觉、全球市场风格", image: demoLuxury },
  { name: "奢享科技版", badge: "高阶", description: "更强 UI，适合品牌化展示", image: demoTech },
  { name: "经典基础版", badge: "稳妥", description: "单语言视觉、结构清晰", image: demoClassic },
  { name: "新颖主题版", badge: "换肤", description: "适合换肤和差异化展示", image: demoFresh },
];

export const packages: Package[] = [
  {
    name: "推广合作",
    price: "免费部署",
    description: "具备推广团队，购买我们的服务器即可合作",
    badge: "零部署费",
    features: ["标准系统部署", "基础上线支持", "推广团队负责市场"],
  },
  {
    name: "额外定制",
    price: "单独计费",
    description: "超出标准系统范围的需求，评估后单独报价",
    features: ["功能需求调整", "页面与流程定制", "按实际工作量报价"],
  },
  {
    name: "技术维护运营",
    price: "盈利 20%",
    description: "由技术团队参与维护运营，按项目实际盈利分成",
    features: ["技术维护支持", "项目运营配合", "收取盈利的 20%"],
  },
];

export const addOnServices = [
  ["合作条件", "具备可落地的推广团队"],
  ["服务器费用", "购买并使用我们的服务器"],
  ["额外需求", "定制与功能调整单独计费"],
  ["维护运营", "按项目实际盈利的 20% 收费"],
] as const;

export const scenes = [
  [sceneHome, "首页展示", "搜索栏、轮播图、功能入口、商品卡片"],
  [sceneProduct, "商品展示", "商品详情、参与记录、进度条、状态标签"],
  [sceneCampaign, "活动展示", "大转盘、限时揭晓、新品首发、专题活动"],
  [sceneContact, "咨询转化", "报价按钮、客服入口、联系方式复制、弹窗提示"],
] as const;

export const growthCards = [
  ["增长展示", "邀请有礼页面、分享海报样式、活动入口", growthAcquisition],
  ["留存展示", "会员样式、积分视觉、权益卡片", growthRetention],
  ["活动展示", "大转盘、砸金蛋、新品首发、限时揭晓", growthCampaign],
] as const;

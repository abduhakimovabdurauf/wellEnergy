import img1 from "@/assets/products/fertilizers/1.png";
import img2 from "@/assets/products/fertilizers/2.png";
import img3 from "@/assets/products/fertilizers/3.png";
import img4 from "@/assets/products/fertilizers/4.png";

const state = {
    populares: [
        {
            id: 1,
            name: {
                en: "Carbamide or urea, nitrogen fertilizer, for plants, garden",
                zh: "尿素或尿素，氮肥，用於植物、花園",
            },
            price: null,
            category: "fertilizers",
            image: img1,
            description: {
                en: "Carbamide contains nitrogen, which is one of the main elements necessary for photosynthesis and plant growth. In addition, carbamide-based fertilizer has antimicrobial and anti-pest properties. This helps protect plants from diseases and pests, which in turn promotes growth and yield.\\n The use of carbamide-based mineral fertilizers is very simple. It is enough to dilute the fertilizer in water and water the plants. It can also be used as a top dressing or foliar top dressing. This makes it convenient to use for gardeners and gardeners. Carbamide is an excellent choice for those who want to provide their plants with optimal conditions for growth and development. Its unique properties allow not only to improve yields, but also to make plants more resistant to stressful conditions.",
                zh: "尿素含有氮，氮是光合作用和植物生長必需的主要元素之一。此外，尿素基肥料還具有抗菌和防蟲特性。這有助於保護植物免受疾病和害蟲的侵害，從而促進生長和產量。將肥料稀釋在水中並給植物澆水就足夠了。也可用作追肥或葉面追肥。這使得園丁和園丁使用起來很方便。對於那些想要為植物提供最佳生長和發育條件的人來說，尿素是一個絕佳的選擇。其獨特的特性不僅可以提高產量，還可以使植物更能抵抗壓力條件。",
            },
        },
        {
            id: 2,
            name: {
                en: "Ammonium Chloride N:26%",
                zh: "氯化铵 N:26%",
            },
            price: null,
            category: "fertilizers",
            image: img2,
            description: {
                en: "Special nitrogen fertilizer. Composition: - Nitrogen (N): 26% Features: - Effective for all soil types and crops - High nitrogen content for active growth - Quick absorption by plants Recommended use: - For rice, sugarcane, cotton and vegetables - Applied to soil as basic fertilizer",
                zh: "專用氮肥。成分： - 氮 (N)：26% 特點： - 對所有土壤類型和作物有效 - 氮含量高，促進生長活躍 - 植物快速吸收 建議用途： - 用於水稻、甘蔗、棉花和蔬菜 - 作為基肥施用於土壤",
            },
        },
        {
            id: 3,
            name: {
                en: "OLTIN SOP Sulphate of Potash K:50%",
                zh: "OLTIN SOP 硫酸钾 K:50%",
            },
            price: null,
            category: "fertilizers",
            image: img3,
            description: {
                en: "Special potassium fertilizer. Composition: - Potassium (K): 50% Features: - Chlorine-free, perfect for salt-sensitive crops - Reduces soil salt index - Improves taste, color and product durability Recommended use: - Perfect for fruits, flowers, tobacco and vegetables - Used to improve product quality",
                zh: "專用鉀肥。成分： - 鉀 (K)：50% 特點： - 不含氯，非常適合對鹽敏感的作物 - 降低土壤鹽分指數 - 改善味道、顏色和產品耐久性 推薦用途： - 非常適合水果、花卉、煙草和蔬菜 - 用於提高產品質量",
            },
        },
        {
            id: 4,
            name: {
                en: "OLTIN MOP Muriate of Potash K:60%",
                zh: "OLTIN MOP 氯化钾 K:60%",
            },
            price: null,
            category: "fertilizers",
            image: img4,
            description: {
                en: "Water-soluble fertilizer with high potassium content. Composition: - Nitrogen (N): 10% - Phosphorus (P): 10% - Potassium (K): 40% - Trace elements (TE): B, Zn, Cu, Mn, Fe, Mo Features: - High potassium content for improved fruit quality - Increases resistance to stress conditions - Improves taste qualities of products Recommended use: - For crops requiring potassium nutrition - Perfect for application during fruit ripening period",
                zh: "鉀含量高的水溶性肥料。成分： - 氮 (N)：10% - 磷 (P)：10% - 鉀 (K)：40% - 微量元素 (TE)：B、Zn、Cu、Mn、Fe、Mo 特點： - 高鉀含量，提高果實品質 - 增強抗逆性 - 改善產品口感 推薦用途： - 適用於需要果實鉀的作物 - 品質 - 增強抗逆性 - 改善產品口感 推薦用途： - 適用於需要果實鉀的作物",
            },
        },
    ],
};

const getters = {
    allProducts: (state) => {
        return Object.values(state.populares).flat();
    },
    getProductById: (state) => (id) => {
        return Object.values(state.populares).flat().find(product => product.id === id);
    },
};


export default {
    namespaced: true,
    state,
    getters,
};

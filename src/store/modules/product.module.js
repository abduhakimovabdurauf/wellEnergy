// src/store/modules/product.module.js

import img1 from "@/assets/products/fertilizers/1.png";
import img2 from "@/assets/products/fertilizers/2.png";
import img3 from "@/assets/products/fertilizers/3.png";
import img4 from "@/assets/products/fertilizers/4.png";
import img5 from "@/assets/products/fertilizers/5.png";
import img6 from "@/assets/products/fertilizers/6.png";
import img7 from "@/assets/products/fertilizers/7.png";
import img8 from "@/assets/products/fertilizers/8.png";
import img9 from "@/assets/products/fertilizers/9.png";
import img10 from "@/assets/products/fertilizers/10.png";
import img11 from "@/assets/products/fertilizers/11.png";
import img12 from "@/assets/products/fertilizers/12.png";
const state = {
    categories: {
        fertilizers: [
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
            {
                id: 5,
                name: {
                    en: "Ammophos NP:12:52",
                    zh: "磷酸铵 NP:12:52",
                },
                price: null,
                category: "fertilizers",
                image: img5,
                description: {
                    en: "Water-soluble fertilizer with high phosphorus content. Composition: - Nitrogen (N): 13% - Phosphorus (P): 40% - Potassium (K): 13% - Trace elements (TE): B, Zn, Cu, Mn, Fe, Mo Features: - High phosphorus content for root system development - Optimal for use in early growth stage - Chelated microelements Recommended use: - For all types of crops, especially phosphorus-demanding ones - Effective for root feeding",
                    zh: "磷含量高的水溶性肥料。成分： - 氮 (N)：13% - 磷 (P)：40% - 鉀 (K)：13% - 微量元素 (TE)：B、Zn、Cu、Mn、Fe、Mo 特性： - 磷含量高，有利於根系發育 - 最適合在生長早期使用 - 螯合微量元素 建議使用根部 - 適用於根系發育 - 最適合在生長早期使用 - 螯合微量元素 建議使用根部： - 適用於所有類型的磷作物 - 對草質用途：尤其需",
                },
            },
            {
                id: 6,
                name: {
                    en: "Potassium Nitrate N:13% K:46%",
                    zh: "硝酸钾 N:13% K:46%",
                },
                price: null,
                category: "fertilizers",
                image: img6,
                description: {
                    en: "Water-soluble complex fertilizer with trace elements. Composition: - Nitrogen (N): 18% - Phosphorus (P): 18% - Potassium (K): 18% - Trace elements (TE): B, Zn, Cu, Mn, Fe, Mo Features: - Universal fertilizer for all soil types - Suitable for use both in open field and greenhouses - Chelated microelements for better absorption Recommended use: - For cereals, oilseeds, industrial crops - Perfect for foliar feeding",
                    zh: "含有微量元素的水溶性複合肥料。成分： - 氮 (N)：18% - 磷 (P)：18% - 鉀 (K)：18% - 微量元素 (TE)：B、Zn、Cu、Mn、Fe、Mo 特點： - 適用於所有土壤類型的通用肥料 - 適合露天作物和溫室使用 - 螯合油元素，更好 適合吸收油籽用途： 穀物、通用肥料 - 適合用於微量和溫室使用 - 葉面油元素，更好地吸收 適合性用途： - 穀物通用肥料 - 適合用於微量和溫室使用 - 葉面油元素，更好地吸收 油性用途： - 穀物、通用肥料 - 適合用於微量油面 - 葉片油元素，更適合 適合吸收用途：提供穀物、通用肥料 - 適合用於微量和溫室油面油葉油料",
                },
            },
            {
                id: 7,
                name: {
                    en: "Calcium Nitrate N:15.5%",
                    zh: "硝酸钙 N:15.5%",
                },
                price: null,
                category: "fertilizers",
                image: img7,
                description: {
                    en: "Water-soluble complex fertilizer with sulfur. Composition: - Nitrogen (N): 12% - Phosphorus (P): 11% - Potassium (K): 18% - Sulfur (S): 14% Features: - Fully water-soluble fertilizer - Provides uniform plant nutrition - High potassium content improves fruit quality - Sulfur promotes protein and amino acid synthesis Recommended use: - Suitable for root and foliar application - Recommended for vegetable crops, fruits and vineyards",
                    zh: "水溶性硫複合肥料。成分： - 氮 (N)：12% - 磷 (P)：11% - 鉀 (K)：18% - 硫 (S)：14% 特點： - 全水溶性肥料 - 提供均勻的植物營養 - 高鉀含量提高水果品質 - 硫促進蛋白質和氨基酸合成 推薦用於水果： - 適合根部和葉子用途 - 種植水果作物",
                },
            },
            {
                id: 8,
                name: {
                    en: "Magnesium Sulphate MgO:16.5%",
                    zh: "硫酸镁 MgO:16.5%",
                },
                price: null,
                category: "fertilizers",
                image: img8,
                description: {
                    en: "Complex phosphorus fertilizer with nitrogen and sulfur. Composition: - Nitrogen (N): 4% - Phosphorus (P): 20% - Sulfur (S): 12% Features: - Provides long-term phosphorus nutrition - Contains sulfur in plant-available form - Improves product quality Recommended use: - Suitable for all soil types - Especially effective for oilseed crops",
                    zh: "含氮、硫的複合磷肥。成分： - 氮 (N)：4% - 磷 (P)：20% - 硫 (S)：12% 特點： - 提供長期磷營養 - 含有植物可利用形式的硫 - 提高產品品質 建議用途： - 適合所有土壤類型 - 對油料作物特別有效",
                },
            },
            {
                id: 9,
                name: {
                    en: "Monoammonium Phosphate (MAP) NP:12:61",
                    zh: "磷酸二氢铵 (MAP) NP:12:61",
                },
                price: null,
                category: "fertilizers",
                image: img9,
                description: {
                    en: "Fast-acting nitrogen-phosphorus fertilizer. Composition: - Nitrogen (N): 42% - Phosphorus (P): 5% Features: - Quickly replenishes nitrogen deficiency in soil - Perfect for eliminating nitrogen starvation in plants - Works effectively on all soil types Recommended use: - Used as basic fertilizer or top dressing - Applied during active plant growth stage",
                    zh: "速效氮磷肥。成分： - 氮 (N)：42% - 磷 (P)：5% 特點： - 快速補充土壤中的氮缺乏 - 非常適合消除植物氮缺乏 - 在所有土壤類型上均有效 建議用途： - 用作基肥或追肥 - 在植物活躍生長階段施用",
                },
            },
            {
                id: 10,
                name: {
                    en: "NPK Complex Fertilizer 15:15:15",
                    zh: "NPK 复合肥 15:15:15",
                },
                price: null,
                category: "fertilizers",
                image: img10,
                description: {
                    en: "Complex phosphorus fertilizer with added nitrogen. Composition: - Nitrogen (N): 5% - Phosphorus (P): 23% - Sulfur (S): 4% - Calcium (Ca): 12% Features: - Promotes improvement of soil fertility and nutrient absorption - High phosphorus concentration stimulates root system development - Calcium improves soil structure and pH balance Recommended use: - Ideal for use on phosphorus-poor soils - Effective for pre-sowing treatment and basic application",
                    zh: "加入氮的複合磷肥。成分： - 氮 (N)：5% - 磷 (P)：23% - 硫 (S)：4% - 鈣 (Ca)：12% 特點： - 促進提高土壤肥力和養分吸收 - 高磷濃度刺激根系發育 - 鈣改善土壤結構和 pH 平衡 建議用途： - 非常適合在貧磷處理土壤上使用對基本繁殖",
                },
            },
            {
                id: 11,
                name: {
                    en: "OLTIN NPK(S) 16:16:16(7)",
                    zh: "奥尔廷 NPK(S) 16:16:16(7)"
                },
                price: null,
                category: "fertilizers",
                image: img11,
                description: {
                    en: "Universal complex fertilizer with increased NPK content. Composition: - Nitrogen (N): 16% - Phosphorus (P): 16% - Potassium (K): 16% - Sulfur (S): 7% Features: - Optimal nutrient ratio for increased yield - Balanced content of nitrogen, phosphorus and potassium improves overall plant growth - Helps improve soil structure, water permeability and aeration Recommended use: - Suitable for vegetables, cereals, fruits and other crops - Recommended for use as main or supplementary fertilizer",
                    zh: "通用複合肥料，增加 NPK 含量。成分： - 氮 (N)：16% - 磷 (P)：16% - 鉀 (K)：16% - 硫 (S)：7% 特點： - 提高產量的最佳養分比例 - 氮、磷、鉀含量均衡，改善植物整體生長 - 有助於改善土壤結構、透水性和通氣性 推薦用途： - 適用於蔬菜作物、補充方法"
                }
            },
            {
                id: 12,
                name: {
                    en: "OLTIN NPK(S) 15:15:15(7)",
                    zh: "奥尔廷 NPK(S) 15:15:15(7)"
                },
                price: null,
                category: "fertilizers",
                image: img12,
                description: {
                    en: "Universal complex fertilizer with sulfur. Composition: - Nitrogen (N): 15% - Phosphorus (P): 15% - Potassium (K): 15% - Sulfur (S): 7% Features: - Universal balanced fertilizer for all crops - Sulfur promotes protein formation and plant strengthening - Improves product quality and increases yield Recommended use: - For improving soil structure and fertility - Suitable for all agricultural crops",
                    zh: "通用型含硫複合肥。成分： - 氮 (N)：15% - 磷 (P)：15% - 鉀 (K)：15% - 硫 (S)：7% 特點： - 適用於所有作物的通用平衡結構 - 硫促進蛋白質形成和植物強化 - 提高產品品質並增加產量 建議用途： - 改善土壤肥料 - 硫促進蛋白質形成和植物強化 - 提高產品品質並增加產量 建議用途： - 改善土壤肥料和肥力 - 適合所有農作物"
                }
            }

        ],
        petroleum: [
            {
                id: 1,
                name: {
                    en: "Diesel Fuel",
                    zh: "柴油燃料"
                },
                price: null,
                category: "petroleum",
                image: null,
                description: {
                    en: "High-quality diesel fuel suitable for various diesel engines. Features: - Low sulfur content - High energy efficiency - Suitable for transportation and industrial use Recommended use: - Trucks, buses, and heavy machinery - Industrial and agricultural applications",
                    zh: "高品質柴油，適用於各種柴油發動機。 特點： - 低硫含量 - 高能效 - 適用於交通運輸和工業用途 建議用途： - 卡車、巴士和重型機械 - 工業和農業應用"
                }
            },
            {
                id: 2,
                name: {
                    en: "Petrol (Gasoline) 95",
                    zh: "汽油95號"
                },
                price: null,
                category: "petroleum",
                image: null,
                description: {
                    en: "Premium-grade gasoline with high octane rating. Features: - Enhances engine performance - Reduces carbon deposits - Suitable for modern gasoline engines Recommended use: - Passenger cars and motorcycles - Performance vehicles",
                    zh: "高辛烷值的優質汽油。 特點： - 增強發動機性能 - 減少碳沉積 - 適用於現代汽油發動機 建議用途： - 乘用車和摩托車 - 高性能車輛"
                }
            },
            {
                id: 3,
                name: {
                    en: "Kerosene",
                    zh: "煤油"
                },
                price: null,
                category: "petroleum",
                image: null,
                description: {
                    en: "Multipurpose kerosene fuel used for heating and lighting. Features: - Clean combustion - Low smoke emission - Ideal for household and industrial use Recommended use: - Heating systems and lamps - Aviation and industrial applications",
                    zh: "多用途煤油燃料，用於供暖和照明。 特點： - 清潔燃燒 - 低煙排放 - 適用於家庭和工業用途 建議用途： - 供暖系統和燈具 - 航空和工業應用"
                }
            },
            {
                id: 4,
                name: {
                    en: "Liquefied Petroleum Gas (LPG)",
                    zh: "液化石油氣 (LPG)"
                },
                price: null,
                category: "petroleum",
                image: null,
                description: {
                    en: "Versatile LPG for cooking, heating, and automotive use. Features: - Clean and efficient fuel - Low environmental impact - Suitable for residential and commercial applications Recommended use: - Household and restaurant cooking - Heating and automotive fuel",
                    zh: "多用途液化石油氣 (LPG)，用於烹飪、供暖和汽車用途。 特點： - 清潔高效燃料 - 環保影響低 - 適用於住宅和商業用途 建議用途： - 家庭和餐館烹飪 - 供暖和汽車燃料"
                }
            },
            {
                id: 5,
                name: {
                    en: "Heavy Fuel Oil",
                    zh: "重燃料油"
                },
                price: null,
                category: "petroleum",
                image: null,
                description: {
                    en: "Industrial-grade fuel oil for power generation and marine engines. Features: - High calorific value - Cost-effective energy source - Suitable for large-scale energy production Recommended use: - Power plants and large industrial boilers - Marine transportation and shipping",
                    zh: "工業級燃料油，用於發電和船舶發動機。 特點： - 高熱值 - 成本效益高 - 適用於大規模能源生產 建議用途： - 發電廠和大型工業鍋爐 - 船舶運輸"
                }
            }
        ]
    },
};

const getters = {
    allProducts: (state) => {
        return Object.values(state.categories).flat();
    },
    getProductById: (state) => (id) => {
        return Object.values(state.categories).flat().find(product => product.id === id);
    },
};



export default {
    namespaced: true,
    state,
    getters,
};

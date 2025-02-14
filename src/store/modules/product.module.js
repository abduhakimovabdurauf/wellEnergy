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
                name: "Carbamide or urea, nitrogen fertilizer, for plants, garden",
                price: null,
                category: "fertilizers",
                image: img1,
                description: "Carbamide contains nitrogen, which is one of the main elements necessary for photosynthesis and plant growth. In addition, carbamide-based fertilizer has antimicrobial and anti-pest properties. This helps protect plants from diseases and pests, which in turn promotes growth and yield.\n The use of carbamide-based mineral fertilizers is very simple. It is enough to dilute the fertilizer in water and water the plants. It can also be used as a top dressing or foliar top dressing. This makes it convenient to use for gardeners and gardeners. Carbamide is an excellent choice for those who want to provide their plants with optimal conditions for growth and development. Its unique properties allow not only to improve yields, but also to make plants more resistant to stressful conditions.",
            },
            {
                id: 2,
                name: "Ammonium Chloride N:26%",
                price: null,
                category: "fertilizers",
                image: img2,
                description: "Special nitrogen fertilizer. Composition: - Nitrogen (N): 26% Features: - Effective for all soil types and crops - High nitrogen content for active growth - Quick absorption by plants Recommended use: - For rice, sugarcane, cotton and vegetables - Applied to soil as basic fertilizer",
            },
            {
                id: 3,
                name: "OLTIN SOP Sulphate of Potash K:50%",
                price: null,
                category: "fertilizers",
                image: img3,
                description: "Special potassium fertilizer. Composition: - Potassium (K): 50% Features: - Chlorine-free, perfect for salt-sensitive crops - Reduces soil salt index - Improves taste, color and product durability Recommended use: - Perfect for fruits, flowers, tobacco and vegetables - Used to improve product quality",
            },
            {
                id: 4,
                name: "OLTIN NPK Supra Red 10:10:40+TE",
                price: null,
                category: "fertilizers",
                image: img4,
                description: "Water-soluble fertilizer with high potassium content. Composition: - Nitrogen (N): 10% - Phosphorus (P): 10% - Potassium (K): 40% - Trace elements (TE): B, Zn, Cu, Mn, Fe, Mo Features: - High potassium content for improved fruit quality - Increases resistance to stress conditions - Improves taste qualities of products Recommended use: - For crops requiring potassium nutrition - Perfect for application during fruit ripening period",
            },
            {
                id: 5,
                name: "OLTIN NPK Supra Yellow 13:40:13+TE",
                price: null,
                category: "fertilizers",
                image: img5,
                description: "Water-soluble fertilizer with high phosphorus content. Composition: - Nitrogen (N): 13% - Phosphorus (P): 40% - Potassium (K): 13% - Trace elements (TE): B, Zn, Cu, Mn, Fe, Mo Features: - High phosphorus content for root system development - Optimal for use in early growth stage - Chelated microelements Recommended use: - For all types of crops, especially phosphorus-demanding ones - Effective for root feeding",
            },
            {
                id: 6,
                name: "OLTIN NPK Supra Green 18:18:18+TE",
                price: null,
                category: "fertilizers",
                image: img6,
                description: "Water-soluble complex fertilizer with trace elements. Composition: - Nitrogen (N): 18% - Phosphorus (P): 18% - Potassium (K): 18% - Trace elements (TE): B, Zn, Cu, Mn, Fe, Mo Features: - Universal fertilizer for all soil types - Suitable for use both in open field and greenhouses - Chelated microelements for better absorption Recommended use: - For cereals, oilseeds, industrial crops - Perfect for foliar feeding",
            },
            {
                id: 7,
                name: "OLTIN NPK Supra Blue 12:11:18(14)",
                price: null,
                category: "fertilizers",
                image: img7,
                description: "Water-soluble complex fertilizer with sulfur. Composition: - Nitrogen (N): 12% - Phosphorus (P): 11% - Potassium (K): 18% - Sulfur (S): 14% Features: - Fully water-soluble fertilizer - Provides uniform plant nutrition - High potassium content improves fruit quality - Sulfur promotes protein and amino acid synthesis Recommended use: - Suitable for root and foliar application - Recommended for vegetable crops, fruits and vineyards",
            },
            {
                id: 8,
                name: "Ammoniated Single Superphosphate (ASSP)",
                price: null,
                category: "fertilizers",
                image: img8,
                description: "Complex phosphorus fertilizer with nitrogen and sulfur. Composition: - Nitrogen (N): 4% - Phosphorus (P): 20% - Sulfur (S): 12% Features: - Provides long-term phosphorus nutrition - Contains sulfur in plant-available form - Improves product quality Recommended use: - Suitable for all soil types - Especially effective for oilseed crops",
            },
            {
                id: 9,
                name: "OLTIN CarboPhos Tez 42:5",
                price: null,
                category: "fertilizers",
                image: img9,
                description: "Fast-acting nitrogen-phosphorus fertilizer. Composition: - Nitrogen (N): 42% - Phosphorus (P): 5% Features: - Quickly replenishes nitrogen deficiency in soil - Perfect for eliminating nitrogen starvation in plants - Works effectively on all soil types Recommended use: - Used as basic fertilizer or top dressing - Applied during active plant growth stage",
            },
            {
                id: 10,
                name: "OLTIN Mini Amophos",
                price: null,
                category: "fertilizers",
                image: img10,
                description: "Complex phosphorus fertilizer with added nitrogen. Composition: - Nitrogen (N): 5% - Phosphorus (P): 23% - Sulfur (S): 4% - Calcium (Ca): 12% Features: - Promotes improvement of soil fertility and nutrient absorption - High phosphorus concentration stimulates root system development - Calcium improves soil structure and pH balance Recommended use: - Ideal for use on phosphorus-poor soils - Effective for pre-sowing treatment and basic application",
            },
            {
                id: 11,
                name: "OLTIN NPK(S) 16:16:16(7)",
                price: null,
                category: "fertilizers",
                image: img11,
                description: "Universal complex fertilizer with increased NPK content. Composition: - Nitrogen (N): 16% - Phosphorus (P): 16% - Potassium (K): 16% - Sulfur (S): 7% Features: - Optimal nutrient ratio for increased yield - Balanced content of nitrogen, phosphorus and potassium improves overall plant growth - Helps improve soil structure, water permeability and aeration Recommended use: - Suitable for vegetables, cereals, fruits and other crops - Recommended for use as main or supplementary fertilizer",
            },
            {
                id: 12,
                name: "OLTIN NPK(S) 15:15:15(7)",
                price: null,
                category: "fertilizers",
                image: img12,
                description: "Universal complex fertilizer with sulfur. Composition: - Nitrogen (N): 15% - Phosphorus (P): 15% - Potassium (K): 15% - Sulfur (S): 7% Features: - Universal balanced fertilizer for all crops - Sulfur promotes protein formation and plant strengthening - Improves product quality and increases yield Recommended use: - For improving soil structure and fertility - Suitable for all agricultural crops",
            },
        ],
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

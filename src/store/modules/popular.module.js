const state = {
    populares: [
        {
            id: 1,
            name: "Carbamide or urea, nitrogen fertilizer, for plants, garden",
            price: null,
            category: "fertilizers",
            image: "@/assets/products/fertilizers/1.png",
            description: "Carbamide contains nitrogen, which is one of the main elements necessary for photosynthesis and plant growth. In addition, carbamide-based fertilizer has antimicrobial and anti-pest properties. This helps protect plants from diseases and pests, which in turn promotes growth and yield.\n The use of carbamide-based mineral fertilizers is very simple. It is enough to dilute the fertilizer in water and water the plants. It can also be used as a top dressing or foliar top dressing. This makes it convenient to use for gardeners and gardeners. Carbamide is an excellent choice for those who want to provide their plants with optimal conditions for growth and development. Its unique properties allow not only to improve yields, but also to make plants more resistant to stressful conditions.",
        },
        {
            id: 2,
            name: "Ammonium Chloride N:26%",
            price: null,
            category: "fertilizers",
            image: "@/assets/products/fertilizers/2.png",
            description: "Special nitrogen fertilizer. Composition: - Nitrogen (N): 26% Features: - Effective for all soil types and crops - High nitrogen content for active growth - Quick absorption by plants Recommended use: - For rice, sugarcane, cotton and vegetables - Applied to soil as basic fertilizer",
        },
        {
            id: 3,
            name: "OLTIN SOP Sulphate of Potash K:50%",
            price: null,
            category: "fertilizers",
            image: "@/assets/products/fertilizers/3.png",
            description: "Special potassium fertilizer. Composition: - Potassium (K): 50% Features: - Chlorine-free, perfect for salt-sensitive crops - Reduces soil salt index - Improves taste, color and product durability Recommended use: - Perfect for fruits, flowers, tobacco and vegetables - Used to improve product quality",
        },
        {
            id: 4,
            name: "OLTIN NPK Supra Red 10:10:40+TE",
            price: null,
            category: "fertilizers",
            image: "@/assets/products/fertilizers/4.png",
            description: "Water-soluble fertilizer with high potassium content. Composition: - Nitrogen (N): 10% - Phosphorus (P): 10% - Potassium (K): 40% - Trace elements (TE): B, Zn, Cu, Mn, Fe, Mo Features: - High potassium content for improved fruit quality - Increases resistance to stress conditions - Improves taste qualities of products Recommended use: - For crops requiring potassium nutrition - Perfect for application during fruit ripening period",
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

import axios from "axios";

export const getFooter = async () => {
    const response = await axios.get("data/footer-data.json");
    return response.data
}

export const getStrategyHeader = async () => {
    const response = await axios.get("data/strat-plan-header-data.json");
    return response.data
}

export const getStrategyLayout = async () => {
    const response = await axios.get("data/strat-plan-layout-data.json");
    return response.data
}

export const getInvincibilityHeader = async () => {
    const response = await axios.get("data/invincibility-header-data.json");
    return response.data
}

export const getInvincibilityLayout = async () => {
    const response = await axios.get("data/invincibility-layout-data.json");
    return response.data
}


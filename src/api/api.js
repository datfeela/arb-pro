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
export const getBasicStrategiesRecordsSaleHeader = async () => {
    const response = await axios.get("data/basic-strategies_records-sale-header-data.json");
    return response.data
}

export const getBasicStrategiesRecordsSaleLayout = async () => {
    const response = await axios.get("data/basic-strategies_records-sale-layout-data.json");
    return response.data
}

// post

export const sendFormData = async ({ values, endpoint }) => {
    let dataForm = new FormData();

    for (let [name, value] of Object.entries(values)) {
        dataForm.append(name, value);
    }

    await fetch(endpoint, {
        method: "POST",
        headers: {
            "X-Requested-With": "XMLHttpRequest",
        },
        body: dataForm,
    })
        .then((response) => response.json())
        .then((data) => {
            if (data === "Y") {
                alert("Заявка отправлена");
            }
        });
}

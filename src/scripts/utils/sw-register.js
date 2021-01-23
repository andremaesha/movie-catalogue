import runtime from "serviceworker-webpack-plugin/lib/runtime";

const swRegister = async (_) => {
    if ("serviceWorker" in navigator){
        await runtime.register();
        return;
    } else {
        console.log("Serviceworker not supported in this browser");
    }
};

export default swRegister;
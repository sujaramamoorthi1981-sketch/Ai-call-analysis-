const callAnalysis = {

    emotion: "Happy 😊",

    sentiment: "Positive",

    score: 87,

    duration: "04:32",

    transcript:
        "Customer: Hello, I need help with my recent order. Agent: Sure, I will check the order details for you. Customer: Thank you for your quick response. Agent: Your order has been successfully updated. Customer: That's great. Thank you for your help.",

    summary:
        "The customer contacted the support team regarding a recent order. The agent quickly checked the issue and provided a solution. The customer was satisfied with the response.",

    keyPoints: [

        "Customer requested help with an order.",

        "Support agent responded quickly.",

        "Customer issue was resolved.",

        "Customer was satisfied with the service."

    ]

};


function analyzeCall() {

    return callAnalysis;

}


if (typeof module !== "undefined") {

    module.exports = {
        analyzeCall
    };

}

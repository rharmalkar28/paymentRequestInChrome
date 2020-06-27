if (window.PaymentRequest) {
    const supportedMathod = [{ supportedMethods: ['basic-card'] }];
    const paymentDetails = { total: { label: 'total cost', amount: { currency: 'GBP', value: 10 } } };
    const payreq = new PaymentRequest(supportedMathod, paymentDetails, {});
    payreq.show().then(payment => console.log(payment)).catch(error => console.log(error));
} else {
    console.log('not supported test');
}
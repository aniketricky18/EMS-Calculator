function calculateTotal() {
    const bandagePrice = 100;
    const stressPillPrice = 450;
    const painkillerPrice = 450;

    const bandagesCount = parseInt(document.getElementById('bandages').value) || 0;
    const stressPillsCount = parseInt(document.getElementById('stressPills').value) || 0;
    const painkillersCount = parseInt(document.getElementById('painkillers').value) || 0;
    const discount = parseInt(document.getElementById('discount').value) || 0;
    const tax = parseInt(document.getElementById('tax').value) || 0;

    const subtotal = (bandagesCount * bandagePrice) + (stressPillsCount * stressPillPrice) + (painkillersCount * painkillerPrice);

    const discountAmount = (subtotal * discount) / 100;
    const discountedSubtotal = subtotal - discountAmount;

    const taxAmount = (discountedSubtotal * tax) / 100;
    const totalAmount = discountedSubtotal + taxAmount;

    document.getElementById('totalAmount').textContent = `$${totalAmount.toFixed(2)}`;
}

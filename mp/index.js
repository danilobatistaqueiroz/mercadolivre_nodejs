const { Router } = require('express');
const router = Router();
const MP = require('./mp');

router.get('/pagar', (req, res) => {
    return res.sendFile(__dirname + '/index.html')
});

router.post('/pagar', async (req, res) => {
    console.log('post-accesstoken:'+MP.access_token);
    const paymentData = {
        transaction_amount: 10,
        description: 'Test Payment',
        installments: 1,
        token: req.body.token,
        payment_method_id: 'visa',
        payer: {
            email: 'admin@admin.com'
        }
    };
    
    return MP.payment.save(paymentData)
        .then(data => res.status(200).json({ data }))
        .catch(err => res.status(500).json({ err }));
});

module.exports = router;
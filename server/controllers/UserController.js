const Login = require("../model/transfer.js");
const Transfer = require("../model/recipient.js");
const History = require("../model/history.js");

const getAllLogin = async (req, res) => {
    try {
        const logins = await Login.find();
        res.json(logins);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createLogin = async (req, res) => {
    const { senderId, phoneNumber, initialAmount } = req.body;

    try {
        const newLogin = new Login({ senderId, phoneNumber, initialAmount });
        await newLogin.save();

        res.status(201).json(newLogin);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllTransfer = async (req, res) => {
    try {
        const logins = await Transfer.find();
        res.json(logins);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createTransfer = async (req, res) => {
    const { recipientId, recipientPhoneNumber, transferAmount } = req.body;

    try {
        const sender = await Login.findOne({ senderId: recipientId });
        if (!sender) {
            return res.status(404).json({ error: "Sender not found." });
        }
        console.log(sender);

        if (transferAmount > sender.initialAmount) {
            return res
                .status(400)
                .json({ error: "Transfer amount exceeds available balance." });
        }

        const newTransfer = new Transfer({
            recipientId,
            recipientPhoneNumber,
            transferAmount,
        });
        await newTransfer.save();

        sender.initialAmount -= transferAmount;
        await sender.save();
        const number = sender.phoneNumber
        leftAmount = sender.initialAmount
        const transferId = recipientId
        const transactionHistory = new History({
          transferId,
          number,
          leftAmount
        })
        await transactionHistory.save();
        res.status(201).json(transactionHistory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllLogin,
    createLogin,
    createTransfer,
    getAllTransfer,
};

// API to send POST request to server
export default function sendEmail(req, res) {

    if (req.method === "POST") {
        const reqEmail = req?.body;

        console.log('Req Email: ', reqEmail);
    
        return res.json({msg: "got the message"})
    }

    return res.status(500).json({
        msg: "This needs to be post request"
    })
}


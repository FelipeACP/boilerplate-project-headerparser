const getIP = (req, res) => {
    const software = req.get("User-Agent");
    const language = req.get("Accept-Language");
    const ip = req.ip;
    if (ip) {
        return res.status(200).json({
            "ipaddress": ip,
            "language": language,
            "software": software
        })
    }
    return res.status(404).json({ reponse: "No IP Found" })
}

module.exports.getIP = getIP;
import http from "http";
import os from "os";

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === "/msg" && method === "GET") {
        res.write("Welcome User");
        res.end();
    }

    else if (url === "/system" && method === "GET") {

        const sysData = {
            platform: os.platform(),
            architecture: os.arch(),
            cpuCount: os.cpus().length,
            ip: os.networkInterfaces(),
            totalMemory: (os.totalmem() / 1024 ** 3).toFixed(2) + " GB",
            freeMemory: (os.freemem() / 1024 ** 3).toFixed(2) + " GB"
        };

        res.end(JSON.stringify(sysData));
    }

    else {
        res.statusCode = 404;
        res.end("Error Page");
    }
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
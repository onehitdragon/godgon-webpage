async function POST(req: Request) {
    const res = await fetch(
        process.env.BACKEND_HOST + "/auth/register",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: await req.text()
        }
    )

    return new Response(
        await res.text(),
        {
            status: res.status,
            headers: {
                "Content-Type": "application/json"
            }
        }
    );
}

export { POST };
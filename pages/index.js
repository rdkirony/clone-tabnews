function Home() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <h1>Estou estudando doutora adriana</h1>
            <h3>Olha essa menina linda na foto</h3>
            <img
                src="/adrianita.jpeg" 
                alt="Doutora Adriana"
                height={700}
            />
        </div>
    );
}
export default Home;
document.addEventListener('mousemove', function (e) {
    createSpark(e.clientX, e.clientY);
});

function createSpark(x, y) {
    const spark = document.createElement('div');
    spark.classList.add('spark');
    spark.style.left = `${x}px`;
    spark.style.top = `${y}px`;

    const dx = (Math.random() - 0.5) * 40;
    const dy = (Math.random() - 0.5) * 40;
    spark.style.setProperty('--dx', `${dx}px`);
    spark.style.setProperty('--dy', `${dy}px`);

    document.getElementById('spark-container').appendChild(spark);

    setTimeout(() => {
        spark.remove();
    }, 500); // Remove spark after 0.5 seconds
}

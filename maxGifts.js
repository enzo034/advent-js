function maxGifts(houses) {
    const n = houses.length;
    if (n === 0) return 0;
    if (n === 1) return houses[0];

    const dp = Array(n).fill(0);
    dp[0] = houses[0];
    dp[1] = Math.max(houses[0], houses[1]);

    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + houses[i]);
    }

    return dp[n - 1];
}

console.log(maxGifts([1, 2, 3])); // Posible resultado: 4
console.log(maxGifts([4, 1, 1, 4, 2, 1])); // Posible resultado: 9
console.log(maxGifts([1, 1, 1, 1])); // Posible resultado: 2
console.log(maxGifts([5, 5, 5, 5, 5])); // Posible resultado: 15
console.log(maxGifts([3, 2, 5, 1, 7, 6, 1])); // Posible resultado: 16
console.log(maxGifts([5, 1, 3, 2, 1, 4])); // Posible resultado: 12
console.log(maxGifts([1, 1, 1, 2, 1, 1, 1])); // Posible resultado: 4
console.log(maxGifts([2, 2, 3, 4, 2, 4])); // Posible resultado: 10
console.log(maxGifts([10, 1, 1, 10, 1, 1, 10])); // Posible resultado: 30
console.log(maxGifts([5, 2, 1, 3, 6, 1, 8])); // Posible resultado: 20


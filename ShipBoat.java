class ShipBoat {

    public static void main(String[] args) {
        System.out.println(shipWithinDays(new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, 5));
    }

    private static boolean isGood(int capacity, int limitDays, int[] weights) {
        int days = 1;
        int cap = capacity;
        for (int weight : weights) {
            if (weight > cap) {
                days++;
                if (days > limitDays) return false;
                cap = capacity;
                if (weight > cap) return false;

            }
            cap -= weight;
        }
        return true;
    }

    public static int shipWithinDays(int[] weights, int d) {
        int n = weights.length;
        int max = 0;
        int sum = 0;
        for (int i : weights) {
            max = Math.max(max, i);
            sum += i;
        }
        if (d == n) return max;
        if (d == 1) return sum;
        int left = max - 1;
        int right = sum;
        while (left + 1 < right)
        {
            int mid = (left + right) / 2;
            if (isGood(mid, d, weights)) {
                right = mid;
            } else {
                left = mid;
            }
        }
        return right;
    }
}
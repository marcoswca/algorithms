class F91 {
    public static void main(String[] args) {
        System.out.println(f91(10));
    }

    static Integer f91(int N) {
        if (N <= 100) {
            return f91(f91(N + 11));
        } else {
            return N - 10;
        }
    }
}
export default [
    {
        // _id: 1234,
        items: [
            {
                book: {
                    imgUrl: "https://image.aladin.co.kr/product/844/69/cover500/8991268935_1.jpg",
                    title: "UML, 실전에서는 이것만 쓴다 - Java 프로그래머를 위한",
                    ISBN: 9788991268937,
                    author: "로버트 C. 마틴",
                    publisher: "인사이트",
                    description: "UML을 공부하려는 사람이 아닌, UML을 사용하려는 사람을 위한 책. UML 지상주의에 빠지지 않고 실용적인 관점에서 다루는 방법을 제시한다.",
                    price: 20000,
                },
                volume: 2,
                totalPrice: 40000,
            },
            {
                book: {
                    imgUrl: "https://image.aladin.co.kr/product/67/13/cover500/8991268102_1.jpg",
                    title: "익스트림 프로그래밍",
                    ISBN: 9788991268104,
                    EBook: true,
                    author: "켄트 벡,신시아 안드레스",
                    publisher: "인사이트",
                    description: "두 번째 판의 XP는 더 유연하고 더 강력해졌다. 대규모이고 여러 장소에 흩어져있는 팀도 XP를 할 수 있을까? 할 수 있다. 짝 프로그래밍을 못해도 XP가 가능할까? 가능하다. 팀 수준에서 도입하지 않고 개인만이라도 XP를 할 수 있을까? 그렇다. 임베디드에도 XP를 쓸 수 있나? 물론이다. 오늘 당장부터 개선을 시작할 수 있을까? 그렇다.",
                    price: 17000,
                },
                volume: 2,
                totalPrice: 40000,
            }
        ],
        totalPrice: 60000,
        shippingStatus: '배송준비중',
        user: {
            email: "turtle@gmail.com",
            fullName: "거북이",
            phoneNumber: "010-2222-2222",
            address: {
                postalCode: "222-222",
                address1: "충청북도 세종시 바다구 111번길",
                address2: "오션아파트 301동 502호",
            },
        },
        createdAt:"2022-11-03T14:02:04.292Z",
        updatedAt:"2022-11-03T14:02:04.292Z"
    },
];
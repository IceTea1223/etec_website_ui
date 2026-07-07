export interface Course {
  id: string;
  title: string;
  khTitle: string;
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  duration: number;
  slots?: number;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Beginner to Intermediate' | 'Expert';
  khLevel: string;
  image: string;
  description: string;
  khDescription: string;
}

export interface TeamMember {
  name: string;
  role: string;
  khRole: string;
  image: string;
  links: {
    linkedin: string;
    email: string;
  };
}

export interface StatCard {
  id: string;
  number: string;
  label: string;
  khLabel: string;
  icon: string;
  borderType: 'yellow' | 'blue';
}

export interface StudentProject {
  title: string;
  khTitle: string;
  image: string;
}

export const STAT_CARDS: StatCard[] = [
  {
    id: 'graduates',
    number: '5,000+',
    label: 'Graduated Students',
    khLabel: 'សិស្សដែលបានបញ្ចប់',
    icon: 'school',
    borderType: 'yellow'
  },
  {
    id: 'employment',
    number: '95%',
    label: 'Employment Rate',
    khLabel: 'អត្រាការងារ',
    icon: 'work',
    borderType: 'blue'
  },
  {
    id: 'partners',
    number: '120+',
    label: 'Partner Companies',
    khLabel: 'ក្រុមហ៊ុនដៃគូ',
    icon: 'corporate_fare',
    borderType: 'blue'
  },
  {
    id: 'years',
    number: '10+',
    label: 'Years of Excellence',
    khLabel: 'ឆ្នាំនៃបទពិសោធន៍',
    icon: 'workspace_premium',
    borderType: 'yellow'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Dr. Sovann Reth',
    role: 'Chief Technology Officer',
    khRole: 'ប្រធានផ្នែកបច្ចេកវិទ្យា (CTO)',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0EHKdqvnpTK_Aadb9b_W8B8hUv9MbL_tUjG11ZvqXDontfz2iCH3BH1PwjGDIFBtHU2x8-eT6C-tzNuKBF_z4CHg1Dd9_aC9PWA5O7tPX5SAueE1-7LOCTz0e805CfstK1dSSRC0Lz4qTrs4VJNdUd0GQea_ESJASGXwo4SCDW0qb5n3Pb6Rvx0eB87P3MFBAHLQc7qW87mJ5y8L8o1Ake3R1akxxVG3epM_qKVMqLA_0WTit8mH-Ppjo7AT4gUdglw5dmq1nWBGc',
    links: { linkedin: '#', email: 'sovann.reth@etec.edu' }
  },
  {
    name: 'Ms. Leakena Chan',
    role: 'Head of UX/UI Design',
    khRole: 'ប្រធានផ្នែករចនា UX/UI',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQ738ucdJFDFhask2TK2JaPQUYqcvvN6pBw_J-Gqit5UiiNM6WQ0pmlFgLSo2aQXxrpGB9znmfTOYiInZ36jMyNjX5vNGpZ2tGJVWvg37EAUm8ITVIGvIHPsQ_-1TEWz1sUghdWFS0Y4RY52tcUdV7_BeLMYC58RF4pxwE-jA7aAGeJMzskKl3URvbFH3ZRsQj0HdlGomFBmiRlXnLEyiQDVeubt0RcR9-dCVjDvGGLUHZHdytvC-PWYKyKwm1CS23-9fsXOy9hLR9',
    links: { linkedin: '#', email: 'leakena.chan@etec.edu' }
  },
  {
    name: 'Mr. Dara Vong',
    role: 'Full Stack Lead',
    khRole: 'ប្រធានផ្នែកអភិវឌ្ឍន៍ Full-Stack',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlm3QQiD3twc3cQ8dPaI_PmETE6dKNs8zynW6W59D8QuoTK7ANhZnIWeEnM0F5JY0-fs4Jecm-KRSSPs6BXVvaxojIT8OrBYwpJ0LreAGJR6O8QhUuKthV3jwagFQq1OUguegtIhvBCBNrzkt3Kc1LoE3Jba3xxSOH0ZGDZy9BUnC6VIfxHpXYT6tgjhT2ENJ578Glp4hM4_7F4NU8jS8BuIDyh1ox8_6-ml_d5qFTL6FX-TcyyCrkIQxALfRKxhQcPHIlFBzICLyP',
    links: { linkedin: '#', email: 'dara.vong@etec.edu' }
  },
  {
    name: 'Ms. Sophea Keo',
    role: 'AI & Data Specialist',
    khRole: 'អ្នកជំនាញផ្នែក AI និងទិន្នន័យ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALJjw9KtxVhcK0dNY-0NfqnB3n77hqhoog3VnvjLDZBeY3y7yYW_q0ED_AT7KxaRWl9AvNfRiiDIFBhoGjmWpp5JPFinZcWXOHPN5v75tjUX58f9YyM-pOsqYpCwG1Mo_9IeirFQ1iap_O8lOX5MPyIja-BRmumdAqr5EnhHpAMrGv9XHYnXOzScig8A0-jmh0ZK8EyveyAJAgV_mmrFrmjxiJaADrnpoBG_2iYXgdUH10CQs8BOQ-9dAYlxt-gMsY0EmxN9GP-mcH',
    links: { linkedin: '#', email: 'sophea.keo@etec.edu' }
  }
];

export const POPULAR_COURSES: Course[] = [
  {
    id: 'pop-1',
    title: 'Network Administration & Security',
    khTitle: 'ការគ្រប់គ្រងបណ្តាញទូរស័ព្ទ និងសន្តិសុខ',
    price: 120,
    duration: 48,
    slots: 12,
    category: 'Network',
    level: 'Beginner to Intermediate',
    khLevel: 'កម្រិតដំបូងទៅមធ្យម',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgTjFQEmH7z69z6xFIC7y6E_5rlu5bpAmCAH_csPcRw4I5hlJqXtMnisZTWs77JKNOeKbuMh1JvKkB0KVOyBJBYnYPl4D3UVHR4rZKSIBZ7UqZDsF8DlWqk2ub4wgbSu5IEQg8eUJaQ-je-39VQTQhgOCHhKuFxt3pBdUWYZ8TDyl8gYilT5BHT0WZpjiiR6RDBpNv4BCoFgwQhw-QJ_VUjBNuksGHC1vhGxKG2vOZzJhGZeY7qdG0lcUs1Fu2pzEVtUQEvF7-Ax-N',
    description: 'Master network fundamentals, IP connectivity, and security services for enterprise infrastructures.',
    khDescription: 'សិក្សាពីមូលដ្ឋានគ្រឹះនៃបណ្តាញកុំព្យូទ័រ ការភ្ជាប់ IP និងសេវាកម្មសន្តិសុខសម្រាប់សហគ្រាស។'
  },
  {
    id: 'pop-2',
    title: 'Full-Stack Web Development',
    khTitle: 'ការអភិវឌ្ឍន៍គេហទំព័រពេញលេញ (Full-Stack)',
    price: 150,
    duration: 72,
    slots: 15,
    category: 'Programming',
    level: 'Intermediate',
    khLevel: 'កម្រិតមធ្យម',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiqUk0KAu6LI43ZgAPWX0OvJBsyuHYj54Cbfye7sCVcn5DKhBHX8cKxbiVXTWyfeM8ZoiY3wks5eNQ9tiwGh-07UZEXKZATqsAJdmkZDZR8luHBr9ASvIIe7RX4HHIneeZ4WuGCTsRQfsq7r8m2-6wJDKj9XW25W7M4ozIorZzsOXlM0nu94I21feh4tr_xNW-tY3RHTamNoNb1npLuNOHVIyhFqubX7UKlcTtTnqcxqNPPNgDLaf6V1y6r_z5kW74-i--3ZXgbXRf',
    description: 'Build modern, scalable web applications from front to back using the most popular JS frameworks.',
    khDescription: 'រៀនបង្កើតគេហទំព័រទំនើបនិងអាចពង្រីកបាន ចាប់ពី Front-end ដល់ Back-end ដោយប្រើប្រាស់ Framework ពេញនិយម។'
  },
  {
    id: 'pop-3',
    title: 'Graphic Design & UX/UI',
    khTitle: 'ការរចនាក្រាហ្វិក និងការសិក្សា UX/UI',
    price: 95,
    duration: 40,
    slots: 10,
    category: 'Graphics',
    level: 'Beginner',
    khLevel: 'កម្រិតដំបូង',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWDMYzX6tC-vvkTg2BbpXauiRQ2I9J9YDz3GGavM9qfbY2ZijhRw8rNhvNCJCr9DNKwdAP31RCDVJQt4n0kjoyhqthbo30ihvOgcnx5fnSjU3v0WpC8kPB7xhS8-29qFvzVXvpt2nJPVx0P38BkjG-aGnLqBNWiaGCCOAAmDWTNMekg8WclSx1LzJUa1fqIjMtzmeo9X6n1pRS8GxXQxyiIrGQ149wNiQDS7a5Vc12ScjZArMrpt5aS3uCC2_omIOfHHs_P3P6UUtE',
    description: 'A clean, minimalist graphic design workspace featuring a large tablet and a professional computer.',
    khDescription: 'សិក្សាពីការរចនាក្រាហ្វិកបែបទំនើប និងការបង្កើតគំរូទូរស័ព្ទ/គេហទំព័រសម្រាប់អ្នកប្រើប្រាស់។'
  },
  {
    id: 'pop-4',
    title: 'Database Management (SQL)',
    khTitle: 'ការគ្រប់គ្រងប្រព័ន្ធទិន្នន័យ (SQL)',
    price: 110,
    duration: 36,
    slots: 15,
    category: 'Database',
    level: 'Intermediate',
    khLevel: 'កម្រិតមធ្យម',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEIhNwMpiVUbHb7IlZVHo9ikSSXVVi7bjRw6p4MOD0cafm8uYmQI29-yJBjgX4x__XhOjo9cwR-9jx2nmJwXzFjXj_KE_QhdDgeFZjHZtxLv_HQRMCyc1T6ttSYAqsnT8FsSEKlhb9kCMaoXCSs9ULT6XfesZzoYr5ZB1fcke4qMlfF7TdV7aqtoA-Sz8MNxxSCYgeUJqQohxvIjRcjfM1Z1C8thjb7BA8X22b6AIHx0ANP_RmeIKwNtlYNNchw9KjXOKinadHWhm4',
    description: 'Abstract 3D rendering of floating digital blocks representing database management and cloud computing.',
    khDescription: 'រៀនពីការរចនារចនាសម្ព័ន្ធទិន្នន័យ ការសរសេរ Query និងការគ្រប់គ្រងទិន្នន័យលើ Cloud។'
  }
];

export const ALL_COURSES: Course[] = [
  {
    id: 'c-1',
    title: 'Cisco CCNA Certification',
    khTitle: 'វិញ្ញាបនបត្រ Cisco CCNA',
    price: 450,
    duration: 80,
    category: 'Network',
    level: 'Beginner to Intermediate',
    khLevel: 'កម្រិតដំបូងទៅមធ្យម',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANB8bH9xHTB_cQLxzln_xUn9dmUsqXsWgHUDOqyfHj6ICjftaqZLedHYHuAfSO23o8Bf2rFggxoWeOXtgkH7l0a9lC5MBkjqs9tELnqRYCEzeLH7wSsKuSOadm-TZUhwD2YLhpS0KTpoMup1cG4aINJUt6SBsgzZvnac2LXt9mNoRr8kk8S4m6v7roRbC3pH5r15nh5ES45rqStd_Yvw4PHZ73KxbWacGxAgLP7MA-0mcf8_6HYIGLgidky_VMQ8RjqRpIsH2va2xU',
    description: 'Master network fundamentals, IP connectivity, and security services for enterprise infrastructures.',
    khDescription: 'សិក្សាបណ្តាញកុំព្យូទ័រ កំណត់ IP Router/Switch និងការការពារសុវត្ថិភាពបណ្តាញព័ត៌មានវិទ្យា។'
  },
  {
    id: 'c-2',
    title: 'Python for Data Science',
    khTitle: 'Python សម្រាប់វិទ្យាសាស្ត្រទិន្នន័យ',
    price: 399,
    duration: 60,
    category: 'Programming',
    level: 'Beginner',
    khLevel: 'កម្រិតដំបូង',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9XQMH2JM7aLSQy60HDxmrGhTsOpgZlpyDy07c4XaZbhV6phgcIDeoFE8yR6qhR_xIsEBW3PWyaIl2CPM3n_w-WfeDcJPsI9zne9KAGFJREvnmu3Ya2pria0SqrEBf2WDgg2ruFpSuspytXeVcsMyCNCoV3ppLoBF4K0JjpvvuySoM8xQy7Xw8yHX10IATHDP35wlOa7x3_w2JnXiLYLF06f6xSEIOp1_EnQ27Vi33k5Xksn2_QNZ1tHhrU3JH1Ju7JFwi1TmuVUy7',
    description: 'Learn Python programming from scratch with a focus on data analysis, visualization and AI models.',
    khDescription: 'សិក្សាភាសា Python ពីបាតដៃទទេ ដោយផ្តោតលើការវិភាគទិន្នន័យ ការបង្ហាញក្រាហ្វិក និងការប្រើប្រាស់ AI។'
  },
  {
    id: 'c-3',
    title: 'Certified Ethical Hacker',
    khTitle: 'អ្នកជំនាញការពារសន្តិសុខព័ត៌មាន (CEH)',
    price: 650,
    duration: 90,
    category: 'Cyber Security',
    level: 'Advanced',
    khLevel: 'កម្រិតខ្ពស់',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBH3hmZgqnjcIA52KTBBAj-2lleypGspiwIIiV9DVL7j8beeHdk0ogGPXusQwLsOjov4Vbm_WwN0hGZCNKbMBbfe9HdLUfJNCQKevCKZldCbenxmUuaBM2ySe_diHmF7cTRE0jqRBOAzpSWs5Fh84g_LI1pLxv4SgGlKp1acv1TAZ68eFJMVcLuaNtiEGoB2GUFQBr7zfrrF6oz7TevYliM1kqm0CXmrKbjhdE4V7vIc3ZOe4b49WLw8nQu9jQlx0P7uKUmo7kaeibo',
    description: 'Identify vulnerabilities and defend systems against cyber attacks using industry-standard tools.',
    khDescription: 'រៀនស្វែងរកចន្លោះប្រហោងនៃប្រព័ន្ធ និងវិធីសាស្ត្រការពារការវាយប្រហារព័ត៌មានវិទ្យាផ្សេងៗ។'
  },
  {
    id: 'c-4',
    title: 'Full-Stack React & Node',
    khTitle: 'Full-Stack React & Node.js',
    price: 599,
    duration: 120,
    category: 'Web Development',
    level: 'Intermediate',
    khLevel: 'កម្រិតមធ្យម',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7T3DanbhQ6cIvEX2BD2kerqX9mWMzrgtK58TWsIG5LY1ZUsksMXUGHSP0w2Slrb7zDqH2RwkQq385VefVPQ9xohHT8hjFCZiHhVxEktBkl-uhYrwJZ-YEg3oRoeu-ErLgGfx9L_bL3pMIIgNejcks0-UjW67btQQvqGIi4EzXNBpB5SMz0jPbd0hJG6DeEztO3XLQOHPT-ehm4eyZVxAZ7Yk95Bcff3vNAeOzzHxDYcDDUxwVAMvUQodN-SBcsZ7Sxepc1Si3O0uv',
    description: 'Build modern, scalable web applications from front to back using the most popular JavaScript stack.',
    khDescription: 'រៀនបង្កើត Web App ដ៏ទំនើប ចាប់តាំងពីការរចនា interface រហូតដល់ API Server និង Database។'
  },
  {
    id: 'c-5',
    title: 'Java Enterprise Edition',
    khTitle: 'Java Enterprise (Spring Boot)',
    price: 550,
    duration: 100,
    category: 'Programming',
    level: 'Intermediate',
    khLevel: 'កម្រិតមធ្យម',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfZlDVqva84i7G5TkcvyQr-Vvm_auu-lYJx0-baJrkOju-Z26Wxbmt3Poio8_UsEu2Upia4o-hIDOVl8oiD8NuZf4FCOW05_R06LrLqmKyBNwqEvk0peUTTbvTbSLfm7xz9hKyJgN55qhTXT1yF2NNu1aOZs9UQTvPtOlSmJA3BSZn5977WXL3gTgIc8axw6wEUpVikELhslbitG79Lz0iPqdYRhToFExNZmxu4wxcGtIbxGGQz5OZmPElQHgIg-O5z5_9OlRv1KK1',
    description: 'Deep dive into robust enterprise application development with Java, Spring Boot, and Hibernate.',
    khDescription: 'សិក្សាស៊ីជម្រៅលើការបង្កើតកម្មវិធីធំៗរបស់ក្រុមហ៊ុនដោយប្រើប្រាស់ Java, Spring Boot និង Hibernate។'
  },
  {
    id: 'c-6',
    title: 'Network Security Specialist',
    khTitle: 'អ្នកឯកទេសសន្តិសុខប្រព័ន្ធបណ្តាញ',
    price: 499,
    duration: 75,
    category: 'Network',
    level: 'Advanced',
    khLevel: 'កម្រិតខ្ពស់',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8Gicey9AiXmZALSUco8bzaN69VPMrt8PRbr1u0zpwkrUflanN1Pf-2AtFcrVO4KlNHE-CK0gNDmPrxgrV5nu0XHBBzLiij9fR1PqDJ37c1ESa5H5ISAAhFIDz4vXOX1uDGeqDdmZVLhtpHNcZPeqEzF1cV9ZCEyE_kl7nRVcsoee0PD7LG8WX8UMcQh3eDerKk1g-MeDZwhUWlc9drg5QAZSV6I1cUOYw3Q41j9jZZ1ANmSVg3EDn9oBb-YpL0LFiT3g-SJOUxolx',
    description: 'Focus on securing network protocols, firewall management, and intrusion detection systems.',
    khDescription: 'ផ្តោតលើការការពារពិធីការបណ្តាញ ការគ្រប់គ្រង Firewall និងប្រព័ន្ធការពារការលួចចូល។'
  }
];

export const PROMO_COURSES: Course[] = [
  {
    id: 'promo-1',
    title: 'Advanced Network Security',
    khTitle: 'សន្តិសុខបណ្តាញកម្រិតខ្ពស់',
    price: 299.40,
    originalPrice: 499.00,
    discountPercent: 40,
    duration: 48,
    category: 'Cybersecurity',
    level: 'Expert',
    khLevel: 'កម្រិតជំនាញ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp0AMaWTxTlgdvNDEgzYTOfH57X2Wn-VvXefNM01OBe6q2IDHUwdsR8axrfHUWrocvCooofCB3QWxDZVa-ebb53h6GdLE9e6ej_qrcCKZ2nHM_kIoE0Y_L0HN0K_JJwH8ghh6UICwKBPti8sABro_3dEyhPPLZtq-u5bua73XnchVgcIyfXaJCPAPWHecOcEcnYoEk1N6-NfjA9KFatz3s4M-3SNG70FMVYKWeZ083Yj_YoJ-edNaKSW8U8xwXBoOwXjXF80uP3NmM',
    description: 'A close-up shot of a high-end laptop displaying complex code and data visualizations. The background is a blurred modern classroom with royal blue and golden accents.',
    khDescription: 'ការសិក្សាស្វែងយល់យ៉ាងស៊ីជម្រៅលើប្រព័ន្ធការពារបណ្តាញកុំព្យូទ័ររបស់សហគ្រាសខ្នាតយក្ស និងវិធីសាស្ត្រទប់ស្កាត់ការលួចទិន្នន័យ។'
  },
  {
    id: 'promo-2',
    title: 'Cloud Architecture Professional',
    khTitle: 'ស្ថាបត្យកម្មប្រព័ន្ធ Cloud អាជីព',
    price: 262.50,
    originalPrice: 350.00,
    discountPercent: 25,
    duration: 36,
    category: 'Cybersecurity',
    level: 'Intermediate',
    khLevel: 'កម្រិតមធ្យម',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAmeT-AVqT8mvU8SAkfXbkPA3ksNTbBCBjrk7IppKey_Tdcqh9SSwnUL_k2_OFFl42yJ9JGIEPPQc4RG5jMwTa5gqX9iKsxIoiWRYqo7OAvuivsz94gc1rJhYS74CJAhnNX9cjkSauz97L1hh5wv_A1o5quxiN5MSyM6hSaCxL96dfF59VWyjV2e5393hnev_KxDaiVnrcrzq3YQvs9fHPTEVlJMOTxyeA5_JFculRCKNo44GnD2ySV406v0x3mnuOkyWn_RI8KZ7q',
    description: 'Dynamic visualization of cloud computing nodes and data streams connecting globally. The aesthetic is clean corporate modern with deep navy blues.',
    khDescription: 'ការរចនាប្រព័ន្ធផ្ទុកទិន្នន័យ និងដំណើរការកម្មវិធីខ្នាតធំលើ AWS, Google Cloud, ឬ Azure ដោយសុវត្ថិភាពខ្ពស់។'
  },
  {
    id: 'promo-3',
    title: 'Full Stack Web Mastery',
    khTitle: 'ជំនាញស្ទាត់ជំនាញ Full Stack Web',
    price: 449.50,
    originalPrice: 899.00,
    discountPercent: 50,
    duration: 120,
    category: 'Data Science',
    level: 'Beginner',
    khLevel: 'កម្រិតដំបូង',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxo7wV6ex7LdLObJsQgO2knOWhAaFkzPGTXBahCtGUe35lpZguQ1SF5wzUsdqQYszjZbGRBGRoRijCeiL6yCPfupoXWJM03gz-340Wm-BSLGciyEClKpm2MSKUvtM2ze6-bqF8hnTD3l8N_8suVjRixAyIT78h4k7DgvddQtJtBBE65sWoFgp9CGwe-Z8liOQsWVOeJaCgSguXobpoSzOfe9ukdRNlBG5jKSTSIDHTdInEFWtGUC8LVhRz3mPtmcbmL4Ty763oEXXh',
    description: 'A clean, minimalist workspace with a tablet showing a data analytics dashboard. Soft daylight enters through a large window of a modern tech hub.',
    khDescription: 'វគ្គសិក្សាពេញលេញដើម្បីក្លាយជាអ្នកបង្កើតគេហទំព័រអាជីព ស្ទាត់ជំនាញទាំងការរចនាប្លង់ខាងក្រៅ និងការសរសេរកូដផ្នែកខាងក្នុង។'
  }
];

export const STUDENT_PROJECTS: StudentProject[] = [
  {
    title: 'Finance & Banking Dashboard UI',
    khTitle: 'ផ្ទាំងបញ្ជាហិរញ្ញវត្ថុ និងធនាគារ (Dashboard UI)',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPFOcCuRNWBttVLr8FjqooXB5tl0GA7E4v2W3EGE9YFLQSWlxiKglhQKbbSc_1a9HbhwwSkTPBPUaa5wddqzhrWydrWTea9pxPSvVIjvRrQXgnUZ1AgTTyn21qc-X8zqV4evv9qZ_DiZSnAUvaFjAfAbADgdDQW5CTXCckRI-nACa_VCmlSzzwkMAnq8VK6KHFLJM60Jz8u13V6eYjrGvKRam2ZgA6T0jNz77rJK910D3QdLnqLR7NtcEmGClI_ilBq7w2UFqiuy-B'
  },
  {
    title: 'Student Collaboration & Tech Sandbox',
    khTitle: 'ការសហការគ្នារបស់និស្សិត និងការអនុវត្តផ្ទាល់',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcQ5T1Y3SpFO59bISeR5zg012pTcpgl60QgewFxm4fkCX8zDlUmoobbPU5d9kQsJskQUg6JUVerzyTdtmCAPNf_ZIS7R1HEI6c3V2thbHuAS_zJx3LS6voxJLxlIVieNADOJ9HJwVVbrtRmAomrmfL53SK0OGxWdqOnzpO8dxhUU0S1MNY5wAtdIWwDpPHqbQYbxulkKO50gigNdYGr5APoIGLRHvqVZtZIFDR3YwISQdKdWKi0H-WFKlGsWaUKxKD4DZ4h_TGLZ2_'
  },
  {
    title: 'Advanced Hardware & Networking Lab',
    khTitle: 'មន្ទីរពិសោធន៍ផ្នែកបណ្តាញកម្រិតខ្ពស់ និងរចនាសម្ព័ន្ធ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAMk5zJkT0jvXPX1ZoBsWrD0jNjxh8xXLZ0FLzZ5lNRWGYpupKJq51uFC7JRotuB2jeP-NqlfSCx9JZTPXmuNZxzKbFfXwiJBuz2bLywQgdrNhEgI8bYYuNruuBitq0RZ5gTV2B1NxGKITT4rMlU_w7wZwdgt19FcnPwDAevWow8oOvw4oh-U5lQqhbyUfDbtcNVNcL7-G3WZV30z9FWDaYawXQmOThinzHyifHKyVLPug3NHoysWUXmsdh8_dYElMZ1k7DMrVc1Cg'
  },
  {
    title: 'Annual Graduation & Awards Ceremony',
    khTitle: 'ពិធីប្រគល់សញ្ញាបត្រប្រចាំឆ្នាំ និងការផ្តល់រង្វាន់',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfAG_9MsN4ScWb6WTxR6oPCQzJOQq1_onjYgO2QElr1E0RHRkCgyE_P2G2PjRa4Y0jCp4Woy4f21sBdzx_D0rgyG7U6aVVa0ir5z805dbkl4U8yz9MrHdjXRNt_pA84tGmT7FO5JaP88u85-aSypxFcB9aQSVnCoDCKT8ByHfSiL1Uoq5APtm7vwAxnQ-fSyflgeDMp2E3qCU4p2YXuqHtwVAnsarHyTsYxsdmpLpQctr_bTlkAwVnk-JxMcX6xpkGTKEhuUsKTfLg'
  }
];

export const TRANSLATIONS: Record<string, Record<string, string>> = {
  en: {
    // Header
    home: 'Home',
    courses: 'Courses',
    promotion: 'Promotion',
    about: 'About',
    getStarted: 'Get Started',
    claimOffer: 'Claim Offer',

    // Hero
    badgeHero: 'Technology for Tomorrow',
    titleHero: 'Learn IT Skills for the Future',
    subHero: 'Start from fundamentals to becoming an IT expert through hands-on learning with highly experienced professors.',
    btnEnroll: 'Register Now',
    btnViewCourses: 'View Courses',

    // Promotion Banner
    promoDiscount: 'Discount 50%',
    promoSpecialOffer: 'Special discount for the New Year!',
    promoSubtitle: 'On all course registrations at ETEC Center.',
    days: 'Days',
    hours: 'Hours',
    mins: 'Mins',

    // Grid sections
    popularTitle: 'Popular Professional Courses',
    popularSubtitle: 'Choose the course that fits your career goals. We offer training from the ground up.',
    viewAllCourses: 'View All Courses',
    hoursCount: 'Hours',
    slotsCount: 'Slots',
    durationLabel: 'Duration',
    slotsLabel: 'Slots',

    // About/Stats section
    aboutTitle: 'About ETEC Center',
    aboutDesc: 'We are a leading IT training center in Cambodia focusing on quality instruction and real-world student outcomes.',
    certTitle: 'Recognized Certificate',
    certDesc: 'Students receive certificates recognized by both public and private enterprises.',
    teacherTitle: 'Taught by Industry Experts',
    teacherDesc: 'Professors bring years of practical experience directly from the IT industry.',

    // Courses page
    coursesHeroTitle: 'Our Professional IT Training Courses',
    coursesHeroSub: 'Master the skills of the future with industry-leading certifications and hands-on laboratory experience designed for career growth.',
    filterAll: 'All Courses',
    filterNetwork: 'Network',
    filterProgramming: 'Programming',
    filterWebDev: 'Web Development',
    filterCyberSec: 'Cyber Security',
    enrollBtn: 'Enroll Now',

    // Callback Section
    ctaTitle: 'Start Your Career Transformation Today',
    ctaDesc: 'Join over 5,000 graduates who have successfully bridged the gap between academic knowledge and professional mastery at ETEC Center.',
    jobPlacement: 'Job Placement Rate',
    industryPartners: 'Industry Partnerships',
    needGuidance: 'Need Guidance?',
    fullNamePlace: 'Full Name',
    emailPlace: 'Email Address',
    phonePlace: 'Phone Number',
    requestCallbackBtn: 'Request a Callback',

    // Special Promotion Hero Banner
    specialOfferBadge: 'SPECIAL OFFER',
    unlockTitle: 'Unlock Your Tech Future',
    unlockSubtitle: 'Accelerate your career with our industry-leading IT certifications. Limited time discounts on our most popular expert-led tracks.',
    endsIn: 'Ends in',
    industryRecognized: 'Industry Recognized',

    // Discounted Courses
    discountTitle: 'Discounted Courses',
    discountSubtitle: 'Choose from our specialized programs and start learning today with our exclusive promotional pricing.',
    cyberBadge: 'Cybersecurity',
    dataBadge: 'Data Science',
    offLabel: 'OFF',

    // Registration Card
    registrationTitle: 'Secure Your Spot in the Next Cohort',
    registrationDesc: 'Our courses fill up quickly. Register your interest today and one of our career advisors will reach out to help you choose the right path and lock in your discount.',
    enrolmentOpen: 'Enrolment Open',
    mentorTitle: 'Personal Mentorship',
    mentorDesc: 'Direct access to industry experts for guidance.',
    careerTitle: 'Career Placement',
    careerDesc: '85% of our graduates land jobs within 3 months.',
    selectedProgramLabel: 'Selected Program',
    selectACoursePlace: 'Select a course',
    termsLabel: 'I agree to the Terms of Service and Privacy Policy',
    submitRegistrationBtn: 'Submit Registration',

    // About Us Page
    empowerTitle: 'Empowering the Next Generation of Tech Leaders',
    empowerDesc: 'Bridging the gap between academic theory and industry mastery. Since 2014, ETEC Center has been the catalyst for thousands of successful IT careers.',
    graduatedStudents: 'Graduated Students',
    partnerCompanies: 'Partner Companies',
    yearsOfExcellence: 'Years of Excellence',
    ourLegacy: 'Our Legacy',
    decadeTitle: 'A Decade of Professional Mastery',
    decadeDesc: 'Our journey began with a simple mission: to provide high-quality IT training that actually matters in the real world. Over the last decade, we\'ve evolved from a local training hub to a premier IT center recognized for excellence in programming, networking, and design.',
    curriculumTitle: 'Advanced Curriculum',
    curriculumDesc: 'Constantly updated to match global tech shifts.',
    handsOnLabel: 'Practical Hands-on Learning',
    veteransTitle: 'Led by Industry Veterans',
    veteransDesc: 'Our instructors aren\'t just teachers; they are senior developers and CTOs.',
    successTitle: 'Student Success & Portfolio Projects',
    successDesc: 'We don\'t just teach code; we build solutions. Our students tackle real-world problems using enterprise-grade tech stacks.',
    internTitle: 'Guaranteed Internship Program',
    internDesc: 'We\'ve partnered with over 120 regional tech giants to provide our top graduates with immediate internship opportunities, often leading to full-time roles.',
    applyInternBtn: 'Apply for Internship',
    viewPartnersBtn: 'View Partners',
    internsHiredLabel: 'Interns Hired Permanently',

    // Cart and Interactivity
    cartTitle: 'Your Enrolled Courses',
    cartEmpty: 'No courses added yet. Explore our professional IT training tracks!',
    cartTotal: 'Total Price',
    cartCheckout: 'Confirm & Checkout',
    successToast: 'Successfully Registered! Our coordinator will contact you shortly.',
    cartSuccessToast: 'Successfully checked out! Welcome to your digital learning workspace!',
    courseCount: 'courses',
    closeBtn: 'Close'
  },
  km: {
    // Header
    home: 'ទំព័រដើម',
    courses: 'វគ្គសិក្សា',
    promotion: 'ការបញ្ចុះតម្លៃ',
    about: 'អំពីយើង',
    getStarted: 'ចាប់ផ្តើម',
    claimOffer: 'ទទួលការបញ្ចុះតម្លៃ',

    // Hero
    badgeHero: 'បច្ចេកវិទ្យាសម្រាប់ថ្ងៃស្អែក',
    titleHero: 'រៀនជំនាញ IT ដើម្បីអនាគត',
    subHero: 'ចាប់ផ្តើមពីមូលដ្ឋានគ្រឹះ រហូតក្លាយជាអ្នកជំនាញ IT តាមរយៈការអនុវត្តផ្ទាល់ ជាមួយសាស្ត្រាចារ្យដែលមានបទពិសោធន៍ខ្ពស់។',
    btnEnroll: 'ចុះឈ្មោះឥឡូវនេះ',
    btnViewCourses: 'មើលវគ្គសិក្សា',

    // Promotion Banner
    promoDiscount: 'បញ្ចុះតម្លៃ 50%',
    promoSpecialOffer: 'ការបញ្ចុះតម្លៃពិសេសសម្រាប់ឆ្នាំថ្មី!',
    promoSubtitle: 'រាល់ការចុះឈ្មោះគ្រប់វគ្គសិក្សានៅ ETEC Center។',
    days: 'ថ្ងៃ',
    hours: 'ម៉ោង',
    mins: 'នាទី',

    // Grid sections
    popularTitle: 'វគ្គសិក្សាជំនាញពេញនិយម',
    popularSubtitle: 'ជ្រើសរើសវគ្គសិក្សាដែលសាកសមនឹងគោលដៅការងាររបស់អ្នក។ យើងផ្តល់ជូនការបណ្តុះបណ្តាលពីកម្រិតដំបូងបង្អស់។',
    viewAllCourses: 'មើលវគ្គសិក្សាទាំងអស់',
    hoursCount: 'ម៉ោង',
    slotsCount: 'កន្លែង',
    durationLabel: 'រយៈពេលសិក្សា',
    slotsLabel: 'ចំនួនសិស្ស',

    // About/Stats section
    aboutTitle: 'អំពីមជ្ឈមណ្ឌល ETEC',
    aboutDesc: 'យើងគឺជាមជ្ឈមណ្ឌលបណ្តុះបណ្តាលឈានមុខគេក្នុងប្រទេសកម្ពុជា ដែលផ្តោតសំខាន់លើគុណភាពនៃការបង្រៀន និងលទ្ធផលជាក់ស្តែងរបស់សិស្ស។',
    certTitle: 'វិញ្ញាបនបត្រទទួលស្គាល់',
    certDesc: 'សិស្សទទួលបានវិញ្ញាបនបត្រដែលត្រូវបានទទួលស្គាល់ដោយស្ថាប័នរដ្ឋ និងឯកជននានា។',
    teacherTitle: 'បង្រៀនដោយអ្នកជំនាញ',
    teacherDesc: 'សាស្ត្រាចារ្យមានបទពិសោធន៍ការងារជាក់ស្តែងក្នុងវិស័យ IT ជាច្រើនឆ្នាំមកហើយ។',

    // Courses page
    coursesHeroTitle: 'វគ្គសិក្សាជំនាញព័ត៌មានវិទ្យាអាជីព',
    coursesHeroSub: 'ស្ទាត់ជំនាញបច្ចេកវិទ្យានាពេលអនាគតជាមួយវិញ្ញាបនបត្រឈានមុខគេ និងការអនុវត្តផ្ទាល់នៅក្នុងមន្ទីរពិសោធន៍ជាក់ស្តែង។',
    filterAll: 'គ្រប់វគ្គសិក្សា',
    filterNetwork: 'បណ្តាញបណ្តាញ',
    filterProgramming: 'ការសរសេរកូដ',
    filterWebDev: 'ការអភិវឌ្ឍន៍គេហទំព័រ',
    filterCyberSec: 'សន្តិសុខព័ត៌មានវិទ្យា',
    enrollBtn: 'ចុះឈ្មោះចូលរៀន',

    // Callback Section
    ctaTitle: 'ចាប់ផ្តើមការផ្លាស់ប្តូរអាជីពរបស់អ្នកនៅថ្ងៃនេះ',
    ctaDesc: 'ចូលរួមជាមួយសិស្សជាង ៥០០០ នាក់ដែលបានបញ្ចប់ការសិក្សាដោយជោគជ័យ និងទទួលបានការងារល្អៗនៅមជ្ឈមណ្ឌល ETEC Center។',
    jobPlacement: 'អត្រាការងារទទួលបាន',
    industryPartners: 'ដៃគូសហការឧស្សាហកម្ម',
    needGuidance: 'ត្រូវការការណែនាំបន្ថែម?',
    fullNamePlace: 'ឈ្មោះពេញ',
    emailPlace: 'អាសយដ្ឋានអ៊ីមែល',
    phonePlace: 'លេខទូរស័ព្ទ',
    requestCallbackBtn: 'ស្នើសុំការទាក់ទងមកវិញ',

    // Special Promotion Hero Banner
    specialOfferBadge: 'ការផ្តល់ជូនពិសេស',
    unlockTitle: 'បើកទ្វារឆ្ពោះទៅកាន់អនាគតបច្ចេកវិទ្យា',
    unlockSubtitle: 'ពង្រឹងល្បឿនការងាររបស់អ្នកជាមួយវិញ្ញាបនបត្រ IT ឈានមុខគេ។ ការបញ្ចុះតម្លៃមានកំណត់លើវគ្គសិក្សាពេញនិយមបំផុត។',
    endsIn: 'បញ្ចប់ការផ្តល់ជូនក្នុង',
    industryRecognized: 'ស្ថាប័នជាតិនិងអន្តរជាតិទទួលស្គាល់',

    // Discounted Courses
    discountTitle: 'វគ្គសិក្សាបញ្ចុះតម្លៃពិសេស',
    discountSubtitle: 'ជ្រើសរើសកម្មវិធីសិក្សាពិសេសៗរបស់យើង និងចាប់ផ្តើមរៀននៅថ្ងៃនេះជាមួយតម្លៃការផ្តល់ជូនផ្តាច់មុខ។',
    cyberBadge: 'សន្តិសុខអ៊ីនធឺណិត',
    dataBadge: 'វិទ្យាសាស្ត្រទិន្នន័យ',
    offLabel: 'បញ្ចុះតម្លៃ',

    // Registration Card
    registrationTitle: 'រក្សាកន្លែងសិក្សារបស់អ្នកសម្រាប់វគ្គថ្មី',
    registrationDesc: 'វគ្គសិក្សារបស់យើងនឹងពេញយ៉ាងឆាប់រហ័ស។ ចុះឈ្មោះចាប់អារម្មណ៍នៅថ្ងៃនេះ ហើយអ្នកប្រឹក្សាអាជីពរបស់យើងនឹងទាក់ទងជួយអ្នក។',
    enrolmentOpen: 'កំពុងបើកទទួលចុះឈ្មោះ',
    mentorTitle: 'ការណែនាំផ្ទាល់ខ្លួន',
    mentorDesc: 'ការប្រឹក្សាយោបល់ផ្ទាល់ជាមួយអ្នកជំនាញក្នុងវិស័យ IT។',
    careerTitle: 'ការណែនាំរកការងារ',
    careerDesc: 'សិស្ស ៨៥% ស្វែងរកបានការងារល្អៗក្នុងរយៈពេល ៣ ខែបន្ទាប់ពីបញ្ចប់។',
    selectedProgramLabel: 'ជ្រើសរើសវគ្គសិក្សា',
    selectACoursePlace: 'សូមជ្រើសរើសវគ្គសិក្សាមួយ',
    termsLabel: 'ខ្ញុំយល់ព្រមតាមលក្ខខណ្ឌសេវាកម្ម និងគោលការណ៍ឯកជនភាព',
    submitRegistrationBtn: 'ផ្ញើពាក្យសុំចុះឈ្មោះ',

    // About Us Page
    empowerTitle: 'ការផ្តល់សិទ្ធិអំណាចដល់អ្នកដឹកនាំបច្ចេកវិទ្យាជំនាន់ក្រោយ',
    empowerDesc: 'ផ្សារភ្ជាប់គម្លាតរវាងទ្រឹស្តីសិក្សា និងការអនុវត្តជាក់ស្តែងក្នុងវិស័យការងារ។ ចាប់តាំងពីឆ្នាំ ២០១៤ ETEC ជាកាតាលីករជោគជ័យរបស់សិស្សជាច្រើននាក់។',
    graduatedStudents: 'សិស្សដែលបានបញ្ចប់ការសិក្សា',
    partnerCompanies: 'ក្រុមហ៊ុនដៃគូសហការ',
    yearsOfExcellence: 'ឆ្នាំនៃឧត្តមភាពនៃការបង្រៀន',
    ourLegacy: 'កេរដំណែលរបស់យើង',
    decadeTitle: 'មួយទសវត្សរ៍នៃឧត្តមភាពវិជ្ជាជីវៈ',
    decadeDesc: 'ដំណើររបស់យើងបានចាប់ផ្តើមជាមួយបេសកកម្មដ៏សាមញ្ញមួយ៖ ផ្តល់ជូនការបណ្តុះបណ្តាល IT ដែលមានគុណភាពខ្ពស់ និងស្របតាមការអនុវត្តជាក់ស្តែង។ ក្នុងមួយទសវត្សរ៍កន្លងមកនេះ យើងបានវិវត្តទៅជាមជ្ឈមណ្ឌល IT ឈានមុខគេដែលត្រូវបានទទួលស្គាល់។',
    curriculumTitle: 'កម្មវិធីសិក្សាទំនើប',
    curriculumDesc: 'ធ្វើបច្ចុប្បន្នភាពជាប្រចាំស្របតាមបម្រែបម្រួលបច្ចេកវិទ្យាសកលលោក។',
    handsOnLabel: 'ការអនុវត្តជាក់ស្តែង ១០០%',
    veteransTitle: 'ដឹកនាំដោយអ្នកជំនាញដែលមានបទពិសោធន៍ខ្ពស់',
    veteransDesc: 'សាស្ត្រាចារ្យរបស់យើងមិនមែនត្រឹមតែជាគ្រូបង្រៀននោះទេ ពួកគាត់ជាអ្នកបង្កើតកម្មវិធីជាន់ខ្ពស់ និងជាប្រធានបច្ចេកវិទ្យា។',
    successTitle: 'ភាពជោគជ័យរបស់សិស្ស និងគម្រោងរបស់ពួកគេ',
    successDesc: 'យើងមិនមែនត្រឹមតែបង្រៀនសរសេរកូដនោះទេ យើងបង្កើតដំណោះស្រាយជាក់ស្តែង។ សិស្សានុសិស្សរបស់យើងបានដោះស្រាយបញ្ហាជាក់ស្តែងដោយប្រើបច្ចេកវិទ្យាកម្រិតសហគ្រាស។',
    internTitle: 'កម្មវិធីធានាកម្មសិក្សាការងារ (Internship)',
    internDesc: 'យើងបានសហការជាមួយក្រុមហ៊ុនបច្ចេកវិទ្យាធំៗជាង ១២០ នៅក្នុងតំបន់ ដើម្បីផ្តល់ឱកាសចុះអនុវត្តការងារ និងឈានទៅរកការងារពេញម៉ោង។',
    applyInternBtn: 'ដាក់ពាក្យស្នើសុំកម្មសិក្សា',
    viewPartnersBtn: 'មើលដៃគូសហការ',
    internsHiredLabel: 'កម្មសិក្សាការីទទួលបានការងារពេញសិទ្ធិ',

    // Cart and Interactivity
    cartTitle: 'វគ្គសិក្សាដែលបានចុះឈ្មោះ',
    cartEmpty: 'មិនទាន់មានវគ្គសិក្សាណាមួយត្រូវបានបន្ថែមនៅឡើយទេ។ សូមស្វែងរកវគ្គសិក្សាអាជីពរបស់យើង!',
    cartTotal: 'តម្លៃសរុប',
    cartCheckout: 'បញ្ជាក់ និងចុះឈ្មោះ',
    successToast: 'បានផ្ញើព័ត៌មានដោយជោគជ័យ! បុគ្គលិករបស់យើងនឹងទាក់ទងទៅលោកអ្នកក្នុងពេលឆាប់ៗ។',
    cartSuccessToast: 'ការចុះឈ្មោះវគ្គសិក្សាបានជោគជ័យ! សូមស្វាគមន៍មកកាន់ប្រព័ន្ធសិក្សាឌីជីថល ETEC!',
    courseCount: 'វគ្គសិក្សា',
    closeBtn: 'បិទ'
  }
};

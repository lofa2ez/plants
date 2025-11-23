document.addEventListener('DOMContentLoaded', function () {
    // Мобильное меню
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNavigation = document.getElementById('mainNavigation');

    if (mobileMenuBtn && mainNavigation) {
        mobileMenuBtn.addEventListener('click', function (e) {
            e.preventDefault();
            mainNavigation.classList.toggle('active');
            mobileMenuBtn.textContent = mainNavigation.classList.contains('active') ? '✕' : '=';
        });
    }

    // Кнопка "Узнать больше"
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function (e) {
            e.preventDefault();
            alert('Спасибо за интерес к теме исчезнувших растений! Скоро мы добавим больше информации.');
        });
    }

    // Модальное окно для растений
    const plantModal = document.getElementById('plantModal');
    const modalPlantName = document.getElementById('modalPlantName');
    const modalPlantContent = document.getElementById('modalPlantContent');
    const closeModal = document.querySelector('.close');
    const plantDetailBtns = document.querySelectorAll('.plant-details-btn');

    // Данные для модального окна
    const plantData = {
        'silfii': {
            name: 'Сильфий',
            content: `
                        <div class="modal-plant-info">
                            <div class="modal-plant-image">
                                <img src="./images/silfii.jpg" alt="Сильфий">
                            </div>
                            <div class="modal-plant-details">
                                <p><strong>Период исчезновения:</strong> I век н.э.</p>
                                <p><strong>Регион:</strong> Древний мир (Северная Африка)</p>
                                <p><strong>Причины исчезновения:</strong> Чрезмерный сбор, изменение климата</p>
                                <p>Сильфий было одним из самых ценных растений в Древнем Риме. Его использовали в кулинарии, медицине и даже как контрацептив. Растение было настолько популярно, что его изображение чеканили на монетах. К сожалению, из-за чрезмерного сбора и изменения климатических условий, сильфий полностью исчез к I веку нашей эры.</p>
                            </div>
                        </div>
                    `
        },
        'st_helena': {
            name: 'Дерево Святой Елены',
            content: `
                        <div class="modal-plant-info">
                            <div class="modal-plant-image">
                                <img src="./images/st_helena.jpg" alt="Дерево Святой Елены">
                            </div>
                            <div class="modal-plant-details">
                                <p><strong>Период исчезновения:</strong> 1994 год</p>
                                <p><strong>Регион:</strong> Остров Святой Елены</p>
                                <p><strong>Причины исчезновения:</strong> Уничтожение среды обитания, инвазивные виды</p>
                                <p>Дерево Святой Елены было эндемиком этого удаленного острова. Оно стало жертвой разрушения своей естественной среды обитания и интродукции инвазивных видов растений и животных. Последний живой экземпляр погиб в 1994 году, что сделало это растение символом хрупкости островных экосистем.</p>
                            </div>
                        </div>
                    `
        },
        'franklinia': {
            name: 'Франклинния',
            content: `
                        <div class="modal-plant-info">
                            <div class="modal-plant-image">
                                <img src="./images/franklinia.jpg" alt="Франклинния">
                            </div>
                            <div class="modal-plant-details">
                                <p><strong>Период исчезновения:</strong> 1803 год (в дикой природе)</p>
                                <p><strong>Регион:</strong> Северная Америка (Джорджия)</p>
                                <p><strong>Причины исчезновения:</strong> Неизвестны, возможно болезни или изменение среды</p>
                                <p>Франклинния была открыта в 1765 году и с тех пор больше не встречалась в дикой природе после 1803 года. К счастью, растение было сохранено в ботанических садах и частных коллекциях. Оно известно своими красивыми белыми цветами с желтыми тычинками, которые цветут осенью.</p>
                            </div>
                        </div>
                    `
        }
    };

    // Открытие модального окна
    plantDetailBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const plantId = this.getAttribute('data-plant');
            if (plantData[plantId]) {
                modalPlantName.textContent = plantData[plantId].name;
                modalPlantContent.innerHTML = plantData[plantId].content;
                plantModal.style.display = 'block';
            }
        });
    });

    // Закрытие модального окна
    if (closeModal) {
        closeModal.addEventListener('click', function () {
            plantModal.style.display = 'none';
        });
    }

    window.addEventListener('click', function (e) {
        if (e.target === plantModal) {
            plantModal.style.display = 'none';
        }
    });

    // Кнопка "Наверх"
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Анимация появления элементов при скролле
    const animateOnScroll = function () {
        const elements = document.querySelectorAll('.plant-card, .cause-card');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;

            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Установка начальных стилей для анимации
    const animatedElements = document.querySelectorAll('.plant-card, .cause-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    // Запускаем сразу на случай если элементы уже в поле зрения
    animateOnScroll();
});

(function (d, w, c) {
    w.ChatraID = 'wndHt4YBPbHdZq8RA';
    var s = d.createElement('script');
    w[c] = w[c] || function () {
        (w[c].q = w[c].q || []).push(arguments);
    };
    s.async = true;
    s.src = 'https://call.chatra.io/chatra.js';
    if (d.head) d.head.appendChild(s);
})(document, window, 'Chatra');
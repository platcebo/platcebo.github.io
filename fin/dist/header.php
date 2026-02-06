<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <?php wp_head(); ?>
    <!-- Yandex.Metrika counter -->
    <script type="text/javascript">
        (function(m,e,t,r,i,k,a){
            m[i]=m[i]function(){(m[i].a=m[i].a[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
        })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=103812388', 'ym');

        ym(103812388, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
    </script>
    <noscript><div><img src="https://mc.yandex.ru/watch/103812388" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    <!-- /Yandex.Metrika counter -->
</head>
<body>
    <nav class="nav">
        <div class="container">
            <a href="<?php echo home_url( ) ?>" class="nav__logo">
                <img src="<?php echo wp_get_attachment_image_url( carbon_get_theme_option('logo_site') ) ?>" alt="">
            </a>
            <div class="nav__hum">
                <span></span>
            </div>
            <?php
            wp_nav_menu( array(
                'theme_location'=>'primary',
                'container' => 'ul',
                'menu_class' => 'nav__list',
            ) );
            ?>
            <a href="tel:<?php echo get_fin_option('phone_site_link'); ?>" class="nav__phone"><?php echo get_fin_option('phone_site'); ?></a>
            <div class="nav__btn">
                <button class="btn__wht modal-form__call">Бесплатная консультация</button>
                <a href="<?php echo get_permalink( get_page_by_path('rate') ); ?>" class="btn__wht">Обучение финансам</a>
            </div>
            <div class="nav__soc">
                <a href="tel:<?php echo get_fin_option('phone_site_link'); ?>">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_60_470)">
                            <path d="M26.1333 23.4321C25.742 23.8238 24.8249 25.1429 24.4528 25.515C22.4996 27.4663 18.7984 24.201 17.2984 22.7064L17.2937 22.7017C15.7992 21.2013 12.5335 17.4977 14.4867 15.5443C14.6485 15.3824 15.0259 15.0863 15.4489 14.7648C15.8588 14.4551 16.3222 14.1103 16.5679 13.8642C17.0456 13.3855 17.1968 12.6517 15.0796 10.5337C14.1671 9.60546 13.1429 9.98881 12.218 10.9124C8.48888 14.6424 14.3482 22.096 16.1219 23.8875C17.904 25.6514 25.3553 31.5097 29.0847 27.7831C30.0009 26.8664 30.3947 25.8347 29.4804 24.9385C27.3492 22.8077 26.6156 22.9546 26.1333 23.4321Z" fill="#EDDE3F" />
                            <path d="M20 0C9.0149 0 0 9.0149 0 20C0 23.2581 0.877992 26.4749 2.39655 29.3348L0.0354004 38.5444C-0.0653077 38.9435 0.0524903 39.3659 0.343323 39.6567C0.639344 39.9524 1.0672 40.0638 1.45569 39.9643L10.665 37.6032C13.5248 39.1221 16.7417 40 20 40C30.9851 40 40 30.9851 40 20C40 9.0149 30.9851 0 20 0ZM30.2036 29.6839C28.8382 31.0492 27.2211 31.5836 25.5378 31.5836C21.0883 31.5848 16.1673 27.8528 14.1519 25.857C11.3928 23.0704 5.34241 14.7699 10.3159 9.79646C12.4396 7.67488 14.8685 7.82441 16.4432 9.42445C17.4375 10.4199 20.4669 13.4494 17.9044 16.0105C17.6081 16.3071 17.0575 16.7316 16.5644 17.1057C16.261 17.3358 15.983 17.5394 15.8606 17.6596C15.9076 18.0499 17.2269 19.9805 18.6197 21.38C20.0193 22.7741 21.9535 24.0821 22.5186 24.0433C22.4604 24.0168 22.6639 23.7387 22.894 23.4354C23.2685 22.9422 23.693 22.392 23.9893 22.0954C26.5482 19.531 29.5786 22.5614 30.5753 23.5581C32.1567 25.109 32.3609 27.5266 30.2036 29.6839Z" fill="#EDDE3F" />
                        </g>
                        <defs>
                            <clipPath id="clip0_60_470">
                            <rect width="40" height="40" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </a>
                <a href="<?php echo get_fin_option('tg_link'); ?>">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M39.3825 3.93114C38.8936 3.33082 38.1618 3 37.3216 3C36.8645 3 36.3808 3.09689 35.8833 3.28759L2.02398 16.273C0.227112 16.9619 -0.0148907 17.9958 0.000673127 18.551C0.016237 19.106 0.316223 20.1245 2.1491 20.7101C2.16009 20.7138 2.17107 20.7168 2.18206 20.7202L6.93057 22.0852L30.0567 10.2152C30.6328 9.91902 31.339 10.149 31.6335 10.7281C31.8648 11.1831 31.772 11.7178 31.4425 12.0698L31.4434 12.0707L18.5852 25.7969L18.2183 27.2903L22.81 31.0051L29.1729 36.1526C29.1784 36.1569 29.1839 36.1615 29.1897 36.1657C29.8897 36.7115 30.6545 36.9997 31.4013 37C32.8606 37 34.0224 35.9149 34.3608 34.236L39.9086 6.71445C40.1311 5.61008 39.9443 4.6213 39.3825 3.93114Z" fill="#EDDE3F" />
                        <path d="M16.0876 24.6694C16.1353 24.4762 16.2314 24.2921 16.3777 24.1369L25 15L9 23.1519L12.633 33.5136C12.8401 34.1039 13.1482 34.6066 13.5293 35L16.087 24.6691L16.0876 24.6694Z" fill="#EDDE3F" />
                        <path d="M16 36C16.8444 35.9932 17.6741 35.6494 18.401 35.0033L21 32.6933L17.5347 30L16 36Z" fill="#EDDE3F" />
                    </svg>
                </a>
                <a href="<?php echo get_fin_option('email_site'); ?>">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.9348 22L22.5755 25.2524C21.2133 26.5714 18.8165 26.5999 17.4248 25.2524L14.0654 22L2 33.68C2.44911 33.8804 2.94429 34 3.47073 34H36.5296C37.056 34 37.551 33.8806 38 33.6801L25.9348 22Z" fill="#EDDE3F" />
                        <path d="M36.5296 6H3.47058C2.94414 6 2.44896 6.12525 2 6.33513L14.8928 19.4079C14.8936 19.4088 14.8947 19.4089 14.8955 19.4098C14.8964 19.4107 14.8965 19.4119 14.8965 19.4119L19.0887 23.6625C19.534 24.1125 20.4664 24.1125 20.9116 23.6625L25.1029 19.4126C25.1029 19.4126 25.1039 19.4107 25.1048 19.4098C25.1048 19.4098 25.1067 19.4088 25.1075 19.4079L38 6.33505C37.551 6.12509 37.056 6 36.5296 6Z" fill="#EDDE3F" />
                        <path d="M0.361053 8C0.1373 8.465 0 8.98116 0 9.53407V30.4659C0 31.0188 0.137149 31.535 0.360978 32L12 20.0004L0.361053 8Z" fill="#EDDE3F" />
                        <path d="M39.6389 8L28 20.0004L39.6389 32C39.8627 31.535 40 31.0189 40 30.4658V9.53421C40 8.98115 39.8627 8.46499 39.6389 8Z" fill="#EDDE3F" />
                    </svg>
                </a>
            </div>
        </div>
    </nav>
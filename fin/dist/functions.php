<?php

add_theme_support( 'post-thumbnails' ); 

add_action( 'wp_enqueue_scripts', 'financialharmony_scripts' );

function financialharmony_scripts() {

	$style_ver = filemtime( get_stylesheet_directory() . '/assets/css/style.min.css' );
	
    // Подключение локальных стилей
    wp_enqueue_style( 'resetcss', get_template_directory_uri() . '/assets/css/reset.min.css', array(), '1.0', 'all' );
    wp_enqueue_style( 'maincss', get_template_directory_uri() . '/assets/css/style.min.css', array('resetcss', 'swiper-css'), $style_ver, 'all' );

    // Подключение локального JS
    wp_enqueue_script( 'financialharmony-script', get_template_directory_uri() . '/assets/js/script.js', array('swiper-cdn'), '1.0.0', true );

    // Подключение стиля через CDN (например, Bootstrap)
    wp_enqueue_style( 'swiper-css', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css', array(), '11' );

    // Подключение скрипта через CDN (например, jQuery из CDN)
    wp_enqueue_script( 'swiper-cdn', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', array(), '11', true );
}

add_action('init', 'get_fin_option');
function get_fin_option($key) {
    $options = [
        'logo' => carbon_get_theme_option('logo_site'),
        'wa_link' => carbon_get_theme_option('wa_link'),
        'tg_link' => carbon_get_theme_option('tg_link'),
        'phone_site' => carbon_get_theme_option('phone_site'),
        'phone_site_link' => carbon_get_theme_option('phone_site_link'),
        'email_site' => carbon_get_theme_option('email_site'),
		
    ];
    return $options[$key] ?? null;
}

add_action( 'after_setup_theme', 'theme_register_nav_menu' );

function theme_register_nav_menu() {
	register_nav_menu( 'primary', 'основное меню' );
	register_nav_menu( 'footer', 'меню в подвале' );
}

add_theme_support( 'title-tag' );


add_action( 'init', 'register_post_types' );

function register_post_types(){

	register_post_type( 'work_block', [
		'label'  => null,
		'labels' => [
			'name'               => 'сферы бизнеса', // основное название для типа записи
			'singular_name'      => 'сфера бизнеса', // название для одной записи этого типа
			'add_new'            => 'Добавить сферу бизнеса', // для добавления новой записи
			'add_new_item'       => 'Добавление сферы бизнеса', // заголовка у вновь создаваемой записи в админ-панели.
			'edit_item'          => 'Редактирование сферы бизнеса', // для редактирования типа записи
			'new_item'           => 'Новая сфера бизнеса', // текст новой записи
			'view_item'          => 'Смотреть сферы бизнеса', // для просмотра записи этого типа.
			'search_items'       => 'Искать сферу бизнеса', // для поиска по этим типам записи
			'not_found'          => 'Не найдено', // если в результате поиска ничего не было найдено
			'not_found_in_trash' => 'Не найдено в корзине', // если не было найдено в корзине
			'menu_name'          => 'сферы', // название меню
		],
		'public'                 => true,
		'menu_position'       => 6,
		'menu_icon'           => 'dashicons-admin-comments',
		'supports'            => [ 'title', 'thumbnail', ], 
	] );

    register_post_type( 'help_block', [
		'label'  => null,
		'labels' => [
			'name'               => 'услуги', // основное название для типа записи
			'singular_name'      => 'услуга', // название для одной записи этого типа
			'add_new'            => 'Добавить услугу', // для добавления новой записи
			'add_new_item'       => 'Добавление услуги', // заголовка у вновь создаваемой записи в админ-панели.
			'edit_item'          => 'Редактирование услуги', // для редактирования типа записи
			'new_item'           => 'Новая услуга', // текст новой записи
			'view_item'          => 'Смотреть услугу', // для просмотра записи этого типа.
			'search_items'       => 'Искать услугу', // для поиска по этим типам записи
			'not_found'          => 'Не найдено', // если в результате поиска ничего не было найдено
			'not_found_in_trash' => 'Не найдено в корзине', // если не было найдено в корзине
			'menu_name'          => 'услуги', // название меню
		],
		'public'                 => true,
		'menu_position'       => 7,
		'menu_icon'           => 'dashicons-admin-comments',
		'supports'            => [ 'title', 'excerpt' ], 
	] );

	register_post_type( 'help_har', [
		'label'  => null,
		'labels' => [
			'name'               => 'доп.услуги', // основное название для типа записи
			'singular_name'      => 'услуга', // название для одной записи этого типа
			'add_new'            => 'Добавить услугу', // для добавления новой записи
			'add_new_item'       => 'Добавление услуги', // заголовка у вновь создаваемой записи в админ-панели.
			'edit_item'          => 'Редактирование услуги', // для редактирования типа записи
			'new_item'           => 'Новая услуга', // текст новой записи
			'view_item'          => 'Смотреть услугу', // для просмотра записи этого типа.
			'search_items'       => 'Искать услугу', // для поиска по этим типам записи
			'not_found'          => 'Не найдено', // если в результате поиска ничего не было найдено
			'not_found_in_trash' => 'Не найдено в корзине', // если не было найдено в корзине
			'menu_name'          => 'доп.услуги', // название меню
		],
		'public'                 => true,
		'menu_position'       => 8,
		'menu_icon'           => 'dashicons-admin-comments',
		'supports'            => [ 'title', 'excerpt', 'thumbnail' ], 
	] );

	register_post_type( 'task', [
		'label'  => null,
		'labels' => [
			'name'               => 'форматы', // основное название для типа записи
			'singular_name'      => 'формат', // название для одной записи этого типа
			'add_new'            => 'Добавить формат', // для добавления новой записи
			'add_new_item'       => 'Добавление формата', // заголовка у вновь создаваемой записи в админ-панели.
			'edit_item'          => 'Редактирование формата', // для редактирования типа записи
			'new_item'           => 'Новый формат', // текст новой записи
			'view_item'          => 'Смотреть формат', // для просмотра записи этого типа.
			'search_items'       => 'Искать формат', // для поиска по этим типам записи
			'not_found'          => 'Не найдено', // если в результате поиска ничего не было найдено
			'not_found_in_trash' => 'Не найдено в корзине', // если не было найдено в корзине
			'menu_name'          => 'форматы', // название меню
		],
		'public'                 => true,
		'menu_position'       => 8,
		'menu_icon'           => 'dashicons-admin-comments',
		'supports'            => [ 'title', 'excerpt', 'thumbnail' ], 
	] );

	register_post_type( 'result_block', [
		'label'  => null,
		'labels' => [
			'name'               => 'результаты', // основное название для типа записи
			'singular_name'      => 'результат', // название для одной записи этого типа
			'add_new'            => 'Добавить результат', // для добавления новой записи
			'add_new_item'       => 'Добавление результата', // заголовка у вновь создаваемой записи в админ-панели.
			'edit_item'          => 'Редактирование результата', // для редактирования типа записи
			'new_item'           => 'Новый результат', // текст новой записи
			'view_item'          => 'Смотреть результат', // для просмотра записи этого типа.
			'search_items'       => 'Искать результат', // для поиска по этим типам записи
			'not_found'          => 'Не найдено', // если в результате поиска ничего не было найдено
			'not_found_in_trash' => 'Не найдено в корзине', // если не было найдено в корзине
			'menu_name'          => 'результаты', // название меню
		],
		'public'                 => true,
		'menu_position'       => 9,
		'menu_icon'           => 'dashicons-admin-comments',
		'supports'            => [ 'title',  ], 
	] );

	register_post_type( 'case_block', [
		'label'  => null,
		'labels' => [
			'name'               => 'кейсы', // основное название для типа записи
			'singular_name'      => 'кейс', // название для одной записи этого типа
			'add_new'            => 'Добавить кейс', // для добавления новой записи
			'add_new_item'       => 'Добавление кейса', // заголовка у вновь создаваемой записи в админ-панели.
			'edit_item'          => 'Редактирование кейса', // для редактирования типа записи
			'new_item'           => 'Новый кейс', // текст новой записи
			'view_item'          => 'Смотреть кейс', // для просмотра записи этого типа.
			'search_items'       => 'Искать кейс', // для поиска по этим типам записи
			'not_found'          => 'Не найдено', // если в результате поиска ничего не было найдено
			'not_found_in_trash' => 'Не найдено в корзине', // если не было найдено в корзине
			'menu_name'          => 'кейсы', // название меню
		],
		'public'                 => true,
		'menu_position'       => 9,
		'menu_icon'           => 'dashicons-admin-comments',
		'supports'            => [ 'title', 'excerpt', ], 
	] );

	register_post_type( 'rate_block', [
		'label'  => null,
		'labels' => [
			'name'               => 'тарифы', // основное название для типа записи
			'singular_name'      => 'тариф', // название для одной записи этого типа
			'add_new'            => 'Добавить тариф', // для добавления новой записи
			'add_new_item'       => 'Добавление тарифа', // заголовка у вновь создаваемой записи в админ-панели.
			'edit_item'          => 'Редактирование тарифа', // для редактирования типа записи
			'new_item'           => 'Новый тариф', // текст новой записи
			'view_item'          => 'Смотреть тариф', // для просмотра записи этого типа.
			'search_items'       => 'Искать тариф', // для поиска по этим типам записи
			'not_found'          => 'Не найдено', // если в результате поиска ничего не было найдено
			'not_found_in_trash' => 'Не найдено в корзине', // если не было найдено в корзине
			'menu_name'          => 'тарифы', // название меню
		],
		'public'                 => true,
		'menu_position'       => 9,
		'menu_icon'           => 'dashicons-admin-comments',
		'supports'            => [ 'title', 'excerpt', ], 
	] );
}


use Carbon_Fields\Container;
use Carbon_Fields\Field;
add_action( 'carbon_fields_register_fields', 'crb_attach_theme_options' );
add_action( 'carbon_fields_register_fields', 'page_option' );
add_action( 'carbon_fields_register_fields', 'rate_option' );


function crb_attach_theme_options() {

	Container::make( 'theme_options', 'настройки страницы' )
		->add_tab( 'основные настройки', [
			field::make( 'text', 'tg_link', 'ссылка на телеграмм' ),
			field::make( 'text', 'wa_link', 'ссылка на watsapp' ),
			field::make( 'text', 'phone_site', 'номер телефона' ),
			field::make( 'text', 'phone_site_link', 'номер телефона без пробелов в формате +799999999' ),
			field::make( 'text', 'email_site', 'email' ),
			field::make( 'image', 'logo_site', 'логотип в навигации и футере' ),
			field::make( 'text', 'short_form', 'форма из блока "проведу бесплатный экспересс-аудит" ' ),
            field::make( 'text', 'short_ready', 'форма из блока "Готовы улучшить финансовое состояние вашего бизнеса?" ' ),
			field::make( 'text', 'short_modal', 'форма из всплывающего окна ' ),
			field::make( 'text', 'short_popup', 'попап ' ),
			field::make( 'text', 'short_rate', 'rate ' ),
			field::make( 'text', 'short_choose', 'choose ' ),
			field::make( 'text', 'short_focus', 'focus ' ),
		]);
}

function page_option() {

	Container::make( 'post_meta', 'доп поля' )
		->show_on_page(8)
		->add_tab( 'первый экран', [
			field::make( 'text', 'header_title', 'Заголовок' ),
            field::make( 'text', 'header_text', 'текст под заголовком' ),
            field::make( 'image', 'header_img', 'изображение в этом блоке' ),
		])
        ->add_tab( 'основатель', [
            field::make( 'text', 'founder_title', 'Заголовок' ),
            field::make( 'rich_text', 'founder_text', 'текст под заголовком' ),
            field::make( 'image', 'founder_img', 'изображение в этом блоке' ),
			field::make( 'rich_text', 'founder_1', 'первый блок' )->set_width(50),
            field::make( 'image', 'founder_1_img', 'изображение в этом блоке' )->set_width(50),
            field::make( 'rich_text', 'founder_2', 'второй блок' )->set_width(50),
            field::make( 'image', 'founder_2_img', 'изображение в этом блоке' )->set_width(50),
            field::make( 'rich_text', 'founder_3', 'третий блок' )->set_width(50),
            field::make( 'image', 'founder_3_img', 'изображение в этом блоке' )->set_width(50),
            field::make( 'rich_text', 'founder_4', 'четвертый блок' ),
		])
        ->add_tab( 'результаты в цифрах', [
			field::make( 'text', 'result_title', 'Заголовок' ),
            field::make( 'text', 'result_1', 'лет в финансах и управлении ' )->set_width( 25 ),
            field::make( 'text', 'result_2', 'проектов с ростом прибыли и порядком в учёте  ' )->set_width( 25 ),
            field::make( 'text', 'result_3', 'средний срок наведения порядка в учёте (слово месяцев писать не надо) ' )->set_width( 25 ),
            field::make( 'text', 'result_4', 'клиентов получают «финансовую ясность» уже после первой консультации  ' )->set_width( 25 ),
            field::make( 'text', 'result_5', 'городов России и СНГ  среди моих клиентов ' )->set_width( 25 ),
            field::make( 'text', 'result_6', 'отраслей, с которыми работаем  ' )->set_width( 25 ),
            field::make( 'text', 'result_7', 'услуг доступны онлайн  без привязки к региону ' )->set_width( 25 ),
            field::make( 'text', 'result_8', 'клиентов рекомендуют меня коллегам и партнёрам   ' )->set_width( 25 ),
            field::make( 'text', 'result_9', 'отчётов внедрено  ' )->set_width( 50 ),
            field::make( 'text', 'result_10', 'финансовых моделей разработано и внедрено ' )->set_width( 50 ),
            field::make( 'text', 'result_11', 'именно столько дополнительной прибыли получили наши клиенты благодаря нашему сотрудничеству   ' ),
		])
        ->add_tab( 'почему стоит', [
			field::make( 'text', 'why_title', 'Заголовок' ),
            field::make( 'text', 'why_text', 'текст' ),
            field::make( 'rich_text', 'why_1', 'первый блок' )->set_width( 50 ),
            field::make( 'checkbox', 'why_1_check', 'показывать изображение в этом блоке?' )->set_width( 25 ),
            field::make( 'image', 'why_1_img', 'изображение в этом блоке' )->set_width( 25 ),
            field::make( 'rich_text', 'why_2', 'первый блок' )->set_width( 50 ),
            field::make( 'checkbox', 'why_2_check', 'показывать изображение в этом блоке?' )->set_width( 25 ),
            field::make( 'image', 'why_2_img', 'изображение в этом блоке' )->set_width( 25 ),
            field::make( 'rich_text', 'why_3', 'первый блок' )->set_width( 50 ),
            field::make( 'checkbox', 'why_3_check', 'показывать изображение в этом блоке?' )->set_width( 25 ),
            field::make( 'image', 'why_3_img', 'изображение в этом блоке' )->set_width( 25 ),
            field::make( 'rich_text', 'why_4', 'первый блок' )->set_width( 50 ),
            field::make( 'checkbox', 'why_4_check', 'показывать изображение в этом блоке?' )->set_width( 25 ),
            field::make( 'image', 'why_4_img', 'изображение в этом блоке' )->set_width( 25 ),
		])
        ->add_tab( 'работаю', [
			field::make( 'text', 'work_title', 'Заголовок' ),
            field::make( 'text', 'work_text', 'текст' ),
            field::make( 'image', 'work_img', 'изображение' ),
		])
        ->add_tab( 'услуги', [
			field::make( 'text', 'help_title', 'Заголовок' ),
            field::make( 'text', 'help_text', 'текст' ),
		])
        ->add_tab( 'форма', [
			field::make( 'text', 'form_title', 'Заголовок' ),
            field::make( 'image', 'form_img', 'изображение' ),
		])
        ->add_tab( 'план', [
			field::make( 'text', 'plan_title', 'Заголовок' ),
            field::make( 'text', 'plan_text', 'текст' ),
			field::make( 'text', 'plan_1_name', '1 шаг' )->set_width( 50 ),
			field::make( 'text', 'plan_1_text', 'текст' )->set_width( 50 ),
			field::make( 'text', 'plan_2_name', '2 шаг' )->set_width( 50 ),
			field::make( 'text', 'plan_2_text', 'текст' )->set_width( 50 ),
			field::make( 'text', 'plan_3_name', '3 шаг' )->set_width( 50 ),
			field::make( 'text', 'plan_3_text', 'текст' )->set_width( 50 ),
			field::make( 'text', 'plan_4_name', '4 шаг' )->set_width( 50 ),
			field::make( 'text', 'plan_4_text', 'текст' )->set_width( 50 ),
			field::make( 'text', 'plan_5_name', '5 шаг' )->set_width( 50 ),
			field::make( 'text', 'plan_5_text', 'текст' )->set_width( 50 ),
			field::make( 'text', 'plan_6_name', '6 шаг' )->set_width( 50 ),
			field::make( 'text', 'plan_6_text', 'текст' )->set_width( 50 ),
		])
        ->add_tab( 'формат', [
			field::make( 'text', 'task_title', 'Заголовок' ),
		])
        ->add_tab( 'результат', [
			field::make( 'text', 'har_title', 'Заголовок' ),
            field::make( 'text', 'har_subtitle', 'текст под заголовком' ),
            field::make( 'text', 'har_text', 'текст' ),
		])
        ->add_tab( 'кейсы', [
			field::make( 'text', 'case_title', 'Заголовок' ),
            field::make( 'text', 'case_text', 'текст в нижней части блока' ),
		])
        ->add_tab( 'тарифы', [
			field::make( 'text', 'rate_title', 'Заголовок' ),
            field::make( 'text', 'rate_text', 'текст под заголовком' ),
		])
		->add_tab( 'шорткоды', [
			field::make( 'text', 'short_form', 'форма из блока "проведу бесплатный экспересс-аудит" ' ),
            field::make( 'text', 'short_ready', 'форма из блока "Готовы улучшить финансовое состояние вашего бизнеса?" ' ),
			field::make( 'text', 'short_modal', 'форма из всплывающего окна ' ),
			field::make( 'text', 'short_popup', 'попап ' ),
		]);

	Container::make( 'post_meta', 'о кейсе' )
		->show_on_post_type('case_block')
		->add_fields( [
			field::make( 'rich_text', 'case_before', 'до' ),
            field::make( 'rich_text', 'case_after', 'после' ),
			field::make( 'rich_text', 'case_how', 'что мы сделали' ),
		]);

	Container::make( 'post_meta', 'список' )
		->show_on_post_type('rate_block')
		->add_fields( [
			field::make( 'rich_text', 'rate_list', '' ),
		]);
}

function rate_option() {

	Container::make( 'post_meta', 'доп поля' )
		->show_on_page(153)
		->add_tab( 'проблемы', [
			Field::make( 'complex', 'trouble-type', __( 'слайд' ) ) 
			->add_fields( array( 
				Field::make( 'text', 'trouble-name', __( 'название' ) ),
				Field::make( 'rich_text', 'trouble-list', __( 'список' ) ),
				Field::make( 'image', 'trouble-img', __( 'картинка' ) ),
			) ),
		] );
}
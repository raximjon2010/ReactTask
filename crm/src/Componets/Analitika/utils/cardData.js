import AddCyan from '../icon/add_cyan.svg'
import AddGreen from '../icon/Add_green.svg'
import Bottom_red_button from '../icon/bottom_red_button.svg'
import Filial_group from '../icon/Filial_group_image.svg'
import Filial from '../icon/Filiallar.svg'
import Mentorlar_group_image from '../icon/Mentorlar_group_image.svg'
import Mentorlar from '../icon/Mentorlar.svg'
import Talaba from '../icon/TalabaIcon.svg'
import Talabalar_Container_image from '../icon/Talabalar_Container_image.svg'
import Teng from '../icon/teng.svg'
import Top_icon from '../icon/Top_icon.svg'  
import Instagram from '../icon/instagram.svg'  
import Telegram from '../icon/Telegram.svg'  
import Youtube from '../icon/youtube.svg'  
import Linkedin from '../icon/linkedin.svg'  
import nuqta from '../icon/nuqta.svg'  
import ikki_k from '../icon/2k.svg'  
import unolti_k from '../icon/16k.svg'  
import yigirmasakkiz_k from '../icon/28k.svg'  


export const CardData = [
    {
        id: 1, BoshIcon: Talaba, title: 'Talabalar',
        AddIcon: AddGreen, TopOrBottomIcon: Top_icon, number: '285', image: Talabalar_Container_image,
    },
    {
        id: 2, BoshIcon: Mentorlar, title: 'Mentorlar',
        AddIcon: AddCyan,TopOrBottomIcon: Bottom_red_button, number: '36', image: Mentorlar_group_image,
    },
    {
        id: 3, BoshIcon: Filial, title: 'Filiallar',
        AddIcon: AddCyan,TopOrBottomIcon: Teng, number: '3', image: Filial_group
    },

]

export const IjtimoiyTarmoqlar = [
    {
        id: 4, BoshIcon: Instagram, title: 'Instagram',
        AddIcon: nuqta,TopOrBottomIcon: Top_icon, number: '+22%', image: unolti_k,
        weight: 'weight',
    },
    {
        id: 5, BoshIcon: Telegram, title: 'Telegram',
        AddIcon: nuqta,TopOrBottomIcon: Bottom_red_button, number: '-15%', image: yigirmasakkiz_k,
        weight: 'weight',
    },
    {
        id: 6, BoshIcon: Linkedin, title: 'Linkedin',
        AddIcon: nuqta,TopOrBottomIcon: Top_icon, number: '+22%', image: ikki_k,
        weight: 'weight',
    },
    {
        id: 7, BoshIcon: Youtube, title: 'Youtube',
        AddIcon: nuqta,TopOrBottomIcon: Top_icon, number: '+22%', image: ikki_k,
        weight: 'weight',
    },
]

import './styles.scss';

const slideURL = ['https://images.pexels.com/photos/10824949/pexels-photo-10824949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/3694884/pexels-photo-3694884.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/4967858/pexels-photo-4967858.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/3717274/pexels-photo-3717274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/5785234/pexels-photo-5785234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/3729212/pexels-photo-3729212.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/4331654/pexels-photo-4331654.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/9149637/pexels-photo-9149637.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/10369514/pexels-photo-10369514.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/9996117/pexels-photo-9996117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/11066975/pexels-photo-11066975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/10971966/pexels-photo-10971966.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/6946626/pexels-photo-6946626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/11118538/pexels-photo-11118538.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/10874317/pexels-photo-10874317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/7224169/pexels-photo-7224169.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940']

const mainPhoto = document.getElementById('main-photo__img')
const scrollBox = document.getElementById('scrollbox')
const close = document.getElementById('close')
const showAll = document.getElementById('show-all')
const scrollBoxList = document.getElementById('scrollbox__list')


scrollBox.addEventListener('click', function (event) {
    const target = event.target;
    mainPhoto.src = target.src;

})

close.addEventListener('click', () => {
    mainPhoto.src = '';
})

showAll.addEventListener('click', () => {
    let i = 0;
    setInterval(() => {
        mainPhoto.src = slideURL[i]
        i++;
    }, 3000)

})

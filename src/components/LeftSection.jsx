import logo from '../assets/logo.svg';
import Button from './button/Button'


export default function LeftSection( {active, onChange}) {
    return (
        <section className="app-main__left app-left">
            <figure className="app-left__logo">
                <img src={logo} alt="" />
            </figure>            

            <div className="app-left__btns tab-btns">
                <Button isActive={active === 'reestr'} onClick={() => onChange('reestr')}>Реестр документов</Button>
                <Button isActive={active === 'myTasks'} onClick={() => onChange('myTasks')}>Мои задачи</Button>
                <Button isActive={active === 'applications'} onClick={() => onChange('applications')}>Реестр заявок</Button>
                <Button isActive={active === 'patents'} onClick={() => onChange('patents')}>Реестр патентов</Button>
                <Button isActive={active === 'bulletin'} onClick={() => onChange('bulletin')}>Бюллетень</Button>
                <Button isActive={active === 'search'} onClick={() => onChange('search')}>Поиск</Button>
                <Button isActive={active === 'export'} onClick={() => onChange('export')}>Экспорт</Button>
            </div>
        </section>
    )
}
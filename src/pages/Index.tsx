import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Calendar, Server, Users, Sword, MapPin, Shield, Gift, ChevronRight, Clock, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-minecraft-yellow-light/40 to-minecraft-yellow/20">
      {/* Header/Navigation */}
      <header className="bg-minecraft-yellow sticky top-0 shadow-md z-10">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-minecraft-brown-dark flex items-center gap-2">
            <div className="w-8 h-8 bg-minecraft-brown-dark text-minecraft-yellow flex items-center justify-center rounded">L</div>
            LeneWorld
          </div>
          <nav className="hidden md:block">
            <ul className="flex gap-6">
              <li><a className="font-medium hover:text-minecraft-brown-dark/80 transition-colors" href="#">Главная</a></li>
              <li><a className="font-medium hover:text-minecraft-brown-dark/80 transition-colors" href="#">О сервере</a></li>
              <li><a className="font-medium hover:text-minecraft-brown-dark/80 transition-colors" href="#">Правила</a></li>
              <li><a className="font-medium hover:text-minecraft-brown-dark/80 transition-colors" href="#">Донат</a></li>
              <li><a className="font-medium hover:text-minecraft-brown-dark/80 transition-colors" href="#">Форум</a></li>
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="bg-minecraft-brown-dark text-minecraft-yellow px-3 py-1 hidden md:flex">
              <Clock className="mr-1 h-4 w-4" />
              Онлайн: 156
            </Badge>
            <Button size="sm" className="bg-minecraft-brown-dark text-minecraft-yellow hover:bg-minecraft-brown">
              Войти
            </Button>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <section className="relative container mx-auto py-20 flex flex-col items-center text-center overflow-hidden">
        {/* Декоративные элементы */}
        <div className="absolute top-10 left-10 text-minecraft-yellow opacity-10 text-9xl transform rotate-12">⬦</div>
        <div className="absolute bottom-10 right-10 text-minecraft-yellow opacity-10 text-9xl transform -rotate-12">⬦</div>
        <div className="absolute top-1/2 left-1/4 text-minecraft-yellow opacity-5 text-9xl">⬦</div>
        <div className="absolute top-1/4 right-1/3 text-minecraft-yellow opacity-5 text-9xl">⬦</div>
        
        <div className="relative z-10">
          <div className="inline-block relative mb-2">
            <Badge className="bg-minecraft-brown text-minecraft-yellow-light absolute -top-2 -right-2 transform rotate-3">
              1.20.4
            </Badge>
            <h1 className="text-7xl font-bold text-minecraft-brown-dark mb-6 animate-float relative">
              LeneWorld
              <span className="absolute -bottom-3 left-0 w-full h-2 bg-minecraft-yellow-dark opacity-20"></span>
            </h1>
          </div>
          <p className="text-xl max-w-2xl mb-8 text-minecraft-brown">
            Добро пожаловать в уникальный мир возможностей и приключений. Построй свой дом, развивай экономику, сражайся с монстрами и находи новых друзей!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="minecraft-btn group">
              Играть сейчас
              <span className="absolute -right-1 -top-1 bg-minecraft-yellow-light px-2 py-1 text-xs rounded shadow-md group-hover:bg-minecraft-yellow-dark transition-colors">Новый сезон!</span>
            </button>
            <Button variant="outline" className="border-minecraft-brown/20 hover:bg-minecraft-yellow/20">
              Узнать больше <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="mt-8 flex justify-center gap-4 text-sm text-minecraft-brown">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              IP: play.leneworld.com
            </div>
            <div className="flex items-center">
              <Shield className="h-4 w-4 mr-1" />
              Версия: 1.20.4
            </div>
          </div>
        </div>
      </section>

      {/* Announcement */}
      <section className="bg-minecraft-brown-dark/10 py-4 border-y border-minecraft-brown/10">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-4">
            <div className="animate-pulse">
              <Gift className="h-5 w-5 text-minecraft-brown-dark" />
            </div>
            <p className="font-medium text-minecraft-brown-dark">
              Весенний ивент уже начался! Специальные задания и награды ждут вас до 15 мая!
            </p>
            <Button variant="link" size="sm" className="text-minecraft-brown-dark">
              Подробнее
            </Button>
          </div>
        </div>
      </section>

      {/* Server Features */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-4 text-minecraft-brown-dark">Почему выбирают нас</h2>
        <p className="text-center mb-12 text-minecraft-brown max-w-2xl mx-auto">
          LeneWorld — это не просто сервер, это целое сообщество игроков, объединенных одной целью: создать уникальный игровой опыт
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm border-minecraft-yellow/20 hover:border-minecraft-yellow">
            <Server className="h-12 w-12 text-minecraft-yellow mb-4" />
            <h3 className="text-xl font-bold mb-2 text-minecraft-brown-dark">Стабильный сервер</h3>
            <p className="text-minecraft-brown mb-4">Наш сервер работает 24/7 с минимальными техническими перерывами и отличной производительностью.</p>
            <ul className="text-sm text-minecraft-brown space-y-1">
              <li className="flex items-center"><ChevronRight className="h-4 w-4 text-minecraft-yellow mr-1" /> Мощное железо</li>
              <li className="flex items-center"><ChevronRight className="h-4 w-4 text-minecraft-yellow mr-1" /> DDoS защита</li>
              <li className="flex items-center"><ChevronRight className="h-4 w-4 text-minecraft-yellow mr-1" /> Ежедневные бэкапы</li>
            </ul>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm border-minecraft-yellow/20 hover:border-minecraft-yellow">
            <Users className="h-12 w-12 text-minecraft-yellow mb-4" />
            <h3 className="text-xl font-bold mb-2 text-minecraft-brown-dark">Дружное сообщество</h3>
            <p className="text-minecraft-brown mb-4">Присоединяйтесь к сотням игроков, создавайте кланы и находите новых друзей.</p>
            <ul className="text-sm text-minecraft-brown space-y-1">
              <li className="flex items-center"><ChevronRight className="h-4 w-4 text-minecraft-yellow mr-1" /> Система кланов</li>
              <li className="flex items-center"><ChevronRight className="h-4 w-4 text-minecraft-yellow mr-1" /> Discord сообщество</li>
              <li className="flex items-center"><ChevronRight className="h-4 w-4 text-minecraft-yellow mr-1" /> Регулярные ивенты</li>
            </ul>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm border-minecraft-yellow/20 hover:border-minecraft-yellow">
            <Calendar className="h-12 w-12 text-minecraft-yellow mb-4" />
            <h3 className="text-xl font-bold mb-2 text-minecraft-brown-dark">Регулярные обновления</h3>
            <p className="text-minecraft-brown mb-4">Мы постоянно добавляем новый контент и улучшаем игровой опыт для наших игроков.</p>
            <ul className="text-sm text-minecraft-brown space-y-1">
              <li className="flex items-center"><ChevronRight className="h-4 w-4 text-minecraft-yellow mr-1" /> Новые плагины</li>
              <li className="flex items-center"><ChevronRight className="h-4 w-4 text-minecraft-yellow mr-1" /> Сезонные ивенты</li>
              <li className="flex items-center"><ChevronRight className="h-4 w-4 text-minecraft-yellow mr-1" /> Ежемесячные обновления</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Game Modes */}
      <section className="bg-minecraft-brown-dark/5 py-16 border-y border-minecraft-brown/10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-minecraft-brown-dark">Игровые режимы</h2>
          <p className="text-center mb-12 text-minecraft-brown max-w-2xl mx-auto">
            На нашем сервере каждый найдет режим по душе, от классического выживания до захватывающих мини-игр
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-lg group">
              <div className="absolute inset-0 bg-gradient-to-t from-minecraft-brown-dark to-transparent opacity-70 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1627855533507-dc98aaf1c0d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWluZWNyYWZ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" 
                alt="Выживание" 
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 p-4 z-20 w-full">
                <h3 className="text-xl font-bold text-white mb-1">Выживание</h3>
                <p className="text-white/80 text-sm mb-3">Классический режим с дополнительными возможностями</p>
                <Badge className="bg-minecraft-yellow text-minecraft-brown-dark">Популярный</Badge>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg group">
              <div className="absolute inset-0 bg-gradient-to-t from-minecraft-brown-dark to-transparent opacity-70 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1626379801357-537cec2be16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWluZWNyYWZ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" 
                alt="SkyBlock" 
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 p-4 z-20 w-full">
                <h3 className="text-xl font-bold text-white mb-1">SkyBlock</h3>
                <p className="text-white/80 text-sm mb-3">Постройте свой остров в небе</p>
                <Badge className="bg-minecraft-yellow-light text-minecraft-brown-dark">Новый сезон</Badge>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg group">
              <div className="absolute inset-0 bg-gradient-to-t from-minecraft-brown-dark to-transparent opacity-70 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1567306226840-0a7b3855c5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1pbmVjcmFmdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" 
                alt="Мини-игры" 
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 p-4 z-20 w-full">
                <h3 className="text-xl font-bold text-white mb-1">Мини-игры</h3>
                <p className="text-white/80 text-sm mb-3">Разнообразные игры для развлечения</p>
                <Badge className="bg-minecraft-brown-light text-white">10+ игр</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Server Stats */}
      <section className="container mx-auto py-16">
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-minecraft-yellow/20">
            <div className="text-4xl font-bold text-minecraft-brown-dark mb-2">3256</div>
            <div className="text-minecraft-brown">Зарегистрированных игроков</div>
          </div>
          
          <div className="p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-minecraft-yellow/20">
            <div className="text-4xl font-bold text-minecraft-brown-dark mb-2">156</div>
            <div className="text-minecraft-brown">Игроков онлайн</div>
          </div>
          
          <div className="p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-minecraft-yellow/20">
            <div className="text-4xl font-bold text-minecraft-brown-dark mb-2">42</div>
            <div className="text-minecraft-brown">Активных кланов</div>
          </div>
          
          <div className="p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-minecraft-yellow/20">
            <div className="text-4xl font-bold text-minecraft-brown-dark mb-2">762</div>
            <div className="text-minecraft-brown">Дней онлайн</div>
          </div>
        </div>
      </section>

      {/* Top Players */}
      <section className="bg-minecraft-brown-dark/5 py-16 border-y border-minecraft-brown/10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-minecraft-brown-dark">Топ игроков</h2>
          <p className="text-center mb-12 text-minecraft-brown max-w-2xl mx-auto">
            Лучшие игроки нашего сервера, которые заслужили признание
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg border border-minecraft-yellow/30 text-center">
              <div className="inline-block relative">
                <div className="w-20 h-20 mx-auto bg-minecraft-yellow-light rounded-full mb-4 overflow-hidden border-4 border-minecraft-yellow">
                  <img 
                    src="https://mc-heads.net/avatar/MHF_Steve/100" 
                    alt="Player Avatar" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <Trophy className="absolute -top-2 -right-2 h-6 w-6 text-minecraft-yellow-dark" />
              </div>
              <h3 className="text-xl font-bold text-minecraft-brown-dark mb-1">DragonSlayer</h3>
              <p className="text-minecraft-brown mb-3">Выживание • Уровень 87</p>
              <div className="flex justify-center space-x-2">
                <Badge className="bg-minecraft-yellow text-minecraft-brown-dark">Топ 1</Badge>
                <Badge variant="outline" className="text-minecraft-brown">12450 монет</Badge>
              </div>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg border border-minecraft-yellow/30 text-center">
              <div className="w-20 h-20 mx-auto bg-minecraft-yellow-light rounded-full mb-4 overflow-hidden border-4 border-minecraft-yellow">
                <img 
                  src="https://mc-heads.net/avatar/MHF_Alex/100" 
                  alt="Player Avatar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-minecraft-brown-dark mb-1">BuildMaster</h3>
              <p className="text-minecraft-brown mb-3">SkyBlock • Уровень 82</p>
              <div className="flex justify-center space-x-2">
                <Badge className="bg-minecraft-yellow-light text-minecraft-brown-dark">Топ 2</Badge>
                <Badge variant="outline" className="text-minecraft-brown">10870 монет</Badge>
              </div>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg border border-minecraft-yellow/30 text-center">
              <div className="w-20 h-20 mx-auto bg-minecraft-yellow-light rounded-full mb-4 overflow-hidden border-4 border-minecraft-yellow">
                <img 
                  src="https://mc-heads.net/avatar/MHF_Blaze/100" 
                  alt="Player Avatar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-minecraft-brown-dark mb-1">RedstoneWizard</h3>
              <p className="text-minecraft-brown mb-3">Выживание • Уровень 75</p>
              <div className="flex justify-center space-x-2">
                <Badge className="bg-minecraft-brown-light text-white">Топ 3</Badge>
                <Badge variant="outline" className="text-minecraft-brown">9630 монет</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto py-16">
        <div className="bg-gradient-to-r from-minecraft-yellow to-minecraft-yellow-light p-8 rounded-lg text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607685055802-8a86d56f8905?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1pbmVjcmFmdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60')] opacity-10 bg-cover bg-center"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-minecraft-brown-dark mb-4">Готовы начать приключение?</h2>
            <p className="text-minecraft-brown max-w-2xl mx-auto mb-8">
              Присоединяйтесь к тысячам игроков и станьте частью нашего дружного сообщества. Вас ждет уникальный игровой опыт!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="minecraft-btn">
                Начать играть
              </button>
              <Button variant="outline" className="border-minecraft-brown bg-white/50 hover:bg-white">
                Посмотреть карту сервера
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-minecraft-brown-dark text-white py-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-minecraft-yellow text-minecraft-brown-dark flex items-center justify-center rounded">L</div>
                LeneWorld
              </div>
              <p className="text-white/80 text-sm">
                Уникальный майнкрафт сервер с множеством игровых режимов и дружным сообществом.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-minecraft-yellow">Навигация</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-minecraft-yellow transition-colors">Главная</a></li>
                <li><a href="#" className="hover:text-minecraft-yellow transition-colors">О сервере</a></li>
                <li><a href="#" className="hover:text-minecraft-yellow transition-colors">Правила</a></li>
                <li><a href="#" className="hover:text-minecraft-yellow transition-colors">Донат</a></li>
                <li><a href="#" className="hover:text-minecraft-yellow transition-colors">Форум</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-minecraft-yellow">Режимы</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-minecraft-yellow transition-colors">Выживание</a></li>
                <li><a href="#" className="hover:text-minecraft-yellow transition-colors">SkyBlock</a></li>
                <li><a href="#" className="hover:text-minecraft-yellow transition-colors">Креатив</a></li>
                <li><a href="#" className="hover:text-minecraft-yellow transition-colors">Мини-игры</a></li>
                <li><a href="#" className="hover:text-minecraft-yellow transition-colors">Анархия</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-minecraft-yellow">Контакты</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-center"><MapPin className="h-4 w-4 mr-2" /> IP: play.leneworld.com</li>
                <li><a href="#" className="hover:text-minecraft-yellow transition-colors flex items-center">
                  <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037a13.661 13.661 0 0 0-.602 1.235a18.309 18.309 0 0 0-5.502 0a13.419 13.419 0 0 0-.604-1.235a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.127a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107a13.94 13.94 0 0 0 1.226 1.993a.076.076 0 0 0 .084.029a19.839 19.839 0 0 0 6.002-3.031a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/></svg>
                  Discord
                </a></li>
                <li><a href="#" className="hover:text-minecraft-yellow transition-colors flex items-center">
                  <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/></svg>
                  Facebook
                </a></li>
                <li><a href="#" className="hover:text-minecraft-yellow transition-colors flex items-center">
                  <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"/></svg>
                  Instagram
                </a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-6 bg-white/10" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-white/60 mb-4 md:mb-0">
              © {new Date().getFullYear()} LeneWorld. Все права защищены.
            </div>
            <div className="text-sm text-white/60">
              Minecraft является торговой маркой Mojang AB. Этот сайт не связан с Mojang AB.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

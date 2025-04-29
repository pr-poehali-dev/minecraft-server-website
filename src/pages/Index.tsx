import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Calendar, Server, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-minecraft-yellow-light/40 to-minecraft-yellow/20">
      {/* Header/Navigation */}
      <header className="bg-minecraft-yellow sticky top-0 shadow-md z-10">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-minecraft-brown-dark">LeneWorld</div>
          <nav>
            <ul className="flex gap-6">
              <li><a className="font-medium hover:text-minecraft-brown-dark/80 transition-colors" href="#">Главная</a></li>
              <li><a className="font-medium hover:text-minecraft-brown-dark/80 transition-colors" href="#">О сервере</a></li>
              <li><a className="font-medium hover:text-minecraft-brown-dark/80 transition-colors" href="#">Правила</a></li>
              <li><a className="font-medium hover:text-minecraft-brown-dark/80 transition-colors" href="#">Донат</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero section */}
      <section className="container mx-auto py-20 flex flex-col items-center text-center">
        <div className="relative">
          <h1 className="text-7xl font-bold text-minecraft-brown-dark mb-6 animate-float">
            LeneWorld
          </h1>
          <div className="absolute -top-8 -right-8 text-minecraft-yellow text-8xl opacity-20">⬦</div>
          <div className="absolute -bottom-8 -left-8 text-minecraft-yellow text-8xl opacity-20">⬦</div>
        </div>
        <p className="text-xl max-w-2xl mb-8 text-minecraft-brown">
          Добро пожаловать в уникальный мир возможностей и приключений. Присоединяйтесь к сообществу игроков и стройте свою историю вместе с нами!
        </p>
        <div className="flex gap-4">
          <button className="minecraft-btn">
            Играть сейчас
          </button>
          <Button variant="outline" className="border-minecraft-brown/20 hover:bg-minecraft-yellow/20">
            Узнать больше <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-minecraft-brown-dark">Почему выбирают нас</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
            <Server className="h-12 w-12 text-minecraft-yellow mb-4" />
            <h3 className="text-xl font-bold mb-2 text-minecraft-brown-dark">Стабильный сервер</h3>
            <p className="text-minecraft-brown">Наш сервер работает 24/7 с минимальными техническими перерывами и отличной производительностью.</p>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
            <Users className="h-12 w-12 text-minecraft-yellow mb-4" />
            <h3 className="text-xl font-bold mb-2 text-minecraft-brown-dark">Дружное сообщество</h3>
            <p className="text-minecraft-brown">Присоединяйтесь к сотням игроков, создавайте кланы и находите новых друзей.</p>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
            <Calendar className="h-12 w-12 text-minecraft-yellow mb-4" />
            <h3 className="text-xl font-bold mb-2 text-minecraft-brown-dark">Регулярные обновления</h3>
            <p className="text-minecraft-brown">Мы постоянно добавляем новый контент и улучшаем игровой опыт для наших игроков.</p>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-minecraft-brown-dark text-white py-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold mb-4 md:mb-0">LeneWorld</div>
            <div className="text-sm">© {new Date().getFullYear()} LeneWorld. Все права защищены.</div>
          </div>
          <Separator className="my-4 bg-white/20" />
          <div className="text-sm text-center text-white/60">
            Minecraft является торговой маркой Mojang AB. Этот сайт не связан с Mojang AB.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

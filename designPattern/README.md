# 设计模式
```
继承类：类与类之间的继承关系用 空心三角形+实线 
实现接口：类与接口之间的实现关系用 空心三角形+虚线
关联关系：类与类之间的关联关系用 实线箭头
聚合关系：表示弱的“拥有”关系，体现的是A可以包含B，但B并不是A的一部分，聚合关系用 空心菱形+实线箭头 
合成/组合关系：表示强的“拥有”关系，体现了部分与整体的关系且周期一样。用 实心菱形+实线箭头
依赖关系：用虚线箭头
```
## 创建型  
### 简单工厂模式(Factory)
<img :src="$withBase('/designPattern/简单工厂模式.jpg')">

```java
public interface Sender {  
    void Send();  
}

public class MailSender implements Sender {  
    @Override  
    public void Send() {  
        System.out.println("this is mailsender!");  
    }  
}

public class SmsSender implements Sender {  
    @Override  
    public void Send() {  
        System.out.println("this is sms sender!");  
    }  
}
```
```java
public class SendFactory {  
    public Sender produce(String type) {  
        if ("mail".equals(type)) {  
            return new MailSender();  
        } else if ("sms".equals(type)) {  
            return new SmsSender();  
        } else {  
            System.out.println("请输入正确的类型!");  
            return null;  
        }  
    }  
}

public class FactoryTest {  
    public static void main(String[] args) {  
        SendFactory factory = new SendFactory();  
        Sender sender = factory.produce("sms");  
        sender.Send();  
    }  
}
```
### 工厂方法模式(Factory)
<img :src="$withBase('/designPattern/工厂方法模式.jpg')">

```java
public class SendFactory {  
   public Sender produceMail(){  
        return new MailSender();  
    }  
      
    public Sender produceSms(){  
        return new SmsSender();  
    }  
}

public class FactoryTest {  
    public static void main(String[] args) {  
        SendFactory factory = new SendFactory();  
        Sender sender = factory.produceMail();  
        sender.Send();  
    }  
}
```
```java
//静态工厂方法
public class SendFactory {  
    public static Sender produceMail(){  
        return new MailSender();  
    }  
      
    public static Sender produceSms(){  
        return new SmsSender();  
    }  
}

public class FactoryTest {  
    public static void main(String[] args) {      
        Sender sender = SendFactory.produceMail();  
        sender.Send();  
    }  
}
```

### 抽象工厂模式(Factory)
<img :src="$withBase('/designPattern/抽象工厂模式.jpg')">

```java
public interface Sender {  
    void Send();  
}

public class MailSender implements Sender {  
    @Override  
    public void Send() {  
        System.out.println("this is mailsender!");  
    }  
}

public class SmsSender implements Sender {  
    @Override  
    public void Send() {  
        System.out.println("this is sms sender!");  
    }  
}
```
```java
public interface Provider {  
    Sender produce();  
}

public class SendMailFactory implements Provider {  
    @Override  
    public Sender produce(){  
        return new MailSender();  
    }  
}

public class SendSmsFactory implements Provider{  
    @Override  
    public Sender produce() {  
        return new SmsSender();  
    }  
}
```
```java
public class Test {  
    public static void main(String[] args) {  
        Provider provider = new SendMailFactory();  
        Sender sender = provider.produce();  
        sender.Send();  
    }  
} 
```
### 单例模式(Singleton)
```java
public class Singleton {  
  
    /* 持有私有静态实例，防止被引用，此处赋值为null，目的是实现延迟加载 */  
    private static Singleton instance = null;  
  
    /* 私有构造方法，防止被实例化 */  
    private Singleton() {  
    }  
  
    /* 静态工程方法，创建实例 */  
    public static Singleton getInstance() {  
        if (instance == null) {  
            instance = new Singleton();  
        }  
        return instance;  
    }  
  
    /* 如果该对象被用于序列化，可以保证对象在序列化前后保持一致 */  
    public Object readResolve() {  
        return instance;  
    }  
}  
```
### 建造者模式(Builder)
工厂类模式提供的是创建单个类的模式，而建造者模式则是将各种产品集中起来进行管理，用来创建复合对象，所谓复合对象就是指某个类具有不同的属性，其实建造者模式就是前面抽象工厂模式和最后的Test结合起来得到的。我们看一下代码：
还和前面一样，一个Sender接口，两个实现类MailSender和SmsSender。最后，建造者类如下：
```java
public class Builder {  

    private List<Sender> list = new ArrayList<Sender>();  
      
    public void produceMailSender(int count){  
        for(int i=0; i<count; i++){  
            list.add(new MailSender());  
        }  
    }  
      
    public void produceSmsSender(int count){  
        for(int i=0; i<count; i++){  
            list.add(new SmsSender());  
        }  
    }  
} 

public class Test {  
    public static void main(String[] args) {  
        Builder builder = new Builder();  
        builder.produceMailSender(10);  
    }  
}
```
### 原型模式(Prototype)
```java
//浅复制
public class Prototype implements Cloneable {  
    public Object clone() {  
        try {
            Prototype prototype =  (Prototype) super.clone();
            return prototype;
        } catch (CloneNotSupportedException e) {
            return null;
        }
    }  
} 
```
## 结构型  
### 代理模式(Proxy)
<img :src="$withBase('/designPattern/代理模式.jpg')">

### 适配器模式(Adapter)
<img :src="$withBase('/designPattern/类的适配器模式.jpg')">

<img :src="$withBase('/designPattern/对象的适配器模式.jpg')">

<img :src="$withBase('/designPattern/接口的适配器模式.jpg')">

### 装饰模式(Decorator)
<img :src="$withBase('/designPattern/装饰模式.jpg')">

### 桥接模式(Bridge)
<img :src="$withBase('/designPattern/桥接模式.jpg')">

### 组合模式(Composite)
<img :src="$withBase('/designPattern/组合模式.jpg')">

### 享元模式(Flyweight)
<img :src="$withBase('/designPattern/享元模式.jpg')">

<img :src="$withBase('/designPattern/享元模式2.jpg')">

### 外观模式(Facade)
<img :src="$withBase('/designPattern/外观模式.jpg')">

## 行为型
### 观察者模式(Observer)
<img :src="$withBase('/designPattern/观察者模式.jpg')">

### 模板方法模式(Template)
<img :src="$withBase('/designPattern/模板方法模式.jpg')">

### 命令模式(Command)
<img :src="$withBase('/designPattern/命令模式.jpg')">

### 状态模式(State)
<img :src="$withBase('/designPattern/状态模式.jpg')">

### 责任链模式(Chain)
<img :src="$withBase('/designPattern/责任链模式.jpg')">

### 解释器模式(Interpreter)
<img :src="$withBase('/designPattern/解释器模式.jpg')">

### 中介者模式(Mediator)
<img :src="$withBase('/designPattern/中介者模式.jpg')">

### 访问者模式(Visitor)
<img :src="$withBase('/designPattern/访问者模式.jpg')">

### 策略模式(strategy)
<img :src="$withBase('/designPattern/策略模式.jpg')">

### 备忘录模式(Memento)
<img :src="$withBase('/designPattern/备忘录模式.jpg')">

### 迭代器模式(Iterator)
<img :src="$withBase('/designPattern/迭代器模式.jpg')">

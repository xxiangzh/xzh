# 设计模式
## 创建型  
### 简单工厂模式
<img :src="$withBase('/简单工厂模式.jpg')">

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
### 工厂方法模式
<img :src="$withBase('/工厂方法模式.jpg')">

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

### 抽象工厂模式
<img :src="$withBase('/抽象工厂模式.jpg')">

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
### 单例模式
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
### 建造者模式
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
### 原型模式
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
### 代理模式
### 适配器模式
### 装饰器模式
### 桥接模式
### 组合模式
### 享元模式
### 外观模式 
## 行为型  
### 观察者模式
### 模板方法模式
### 命令模式
### 状态模式
### 职责链模式
### 解释器模式
### 中介者模式
### 访问者模式
### 策略模式
### 备忘录模式
### 迭代器模式
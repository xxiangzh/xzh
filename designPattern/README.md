# 模式分类
## 创建型  
### 简单工厂模式
<img :src="$withBase('/简单工厂模式.png')">

```java
public interface Sender {  
    public void Send();  
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
### 抽象工厂模式
### 单例模式
### 建造者模式
### 原型模式
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
# Observer

The main motivation behind this pattern is to promote loose coupling. Instead of one
object calling another object’s method, an object subscribes to another object’s specific
activity and gets notified. The subscriber is also called observer, while the object being
observed is called publisher or subject. The publisher notifies (calls) all the subscribers
when an important event occurs and may often pass a message in the form of an event
object.
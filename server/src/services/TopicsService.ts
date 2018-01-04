import MongoDbRepository from '../databases/mongodb/MongoDbRepository';
import MySqlRepository from '../databases/mysql/MySqlRepository'

import Topic from '../models/Topic';
import { OperatorEnum, Operator } from '../databases/engine/filter/Operator';
import MySqlWhereFilter from '../databases/mysql/MySqlWhereFilter';

class TopicsService {
    private mongodb: MongoDbRepository;
    private mysql: MySqlRepository;

    constructor() {
        this.mongodb = new MongoDbRepository();
        this.mysql = new MySqlRepository();
    }

    getTopicsById(ids: number[]): Promise<Topic[]> {
        let filter = [];
        for (let i = 0; i < ids.length - 1; i++) {
            filter.push(`ID = ${ids[i]} OR `);
        }
        filter.push(`ID = ${ids[ids.length - 1]}`);

        return this.mysql.find(new Topic()._name, filter.join("")).then(rowset => {
            let topics: Topic[] = [];
            for (let i = 0; i < rowset.length; i++) {
                let topic = new Topic(rowset[i]);
                topics.push(topic);
            }
            return topics;
        });
    }

    getTopicById(id: number): Promise<Topic> {
        return this.mysql.findById(new Topic()._name, id).then(rowset => {
            let topic: Topic = new Topic(rowset);
            console.log(topic);
            return topic;
        });
    }

    getTopics(): Promise<Topic[]> {
        return this.mysql.find(new Topic()._name).then(rowset => {
            let topics: Topic[] = [];
            for (let i = 0; i < rowset.length; i++) {
                let topic = new Topic(rowset[i]);
                topics.push(topic);
            }
            console.log(topics);            
            return topics;
        });
    }
}

export default new TopicsService();
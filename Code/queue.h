#include <stdlib.h>
#include <limits.h>
#include <stdio.h>

typedef int QueueEntry;

typedef struct QueueNode
{
    QueueEntry entry;
    struct QueueNode *next;
} QueueNode;


typedef struct Queue
{
    QueueNode *head;
    QueueNode *tail;
} Queue;

Queue *createQueue()
{  
    Queue *queue = (Queue *)malloc(sizeof(Queue));
    queue->head = queue->tail = NULL;
    return queue;
}

QueueNode *createQueueNode(QueueEntry item)
{
    QueueNode *node = (QueueNode *)malloc(sizeof(QueueNode));
    node->entry = item;
    return node;
}

//When an element is enqueued, it takes its place at the tail of the queue
void enqueue(QueueEntry item, Queue *queue)
{
    QueueNode *node = CreateQueueNode(item);
    if((queue->head)==NULL) { 
        queue->head = queue->tail = node;
    else{
        queue->tail->next = node;
        queue->tail = node;
        node->next = NULL;
    }
    
}

//The element dequeued is always the one at the head of the queue 
QueueEntry dequeue(Queue *queue)
{
    QueueEntry dequeued = INT_MIN;
    if ((queue->head)==NULL) 
    {
        perror("Error: current queue is empty");
        return dequeued;
    }
    QueueNode *temp = queue->head;
    queue->head = queue->head->next;
    dequeued = temp->entry;
    free(temp);
    return dequeued;
}
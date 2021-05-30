#include <stdlib.h>
#include <limits.h>
#include <stdio.h>

typedef int StackEntry;
typedef struct StackNode
{
    StackEntry entry;
    struct StackNode *next;
} StackNode;
typedef struct Stack
{
    StackNode *head;
    StackNode *tail;
} Stack;

Stack *createStack()
{
    Stack *stack = (Stack *)malloc(sizeof(Stack));
    stack->head = stack->tail = NULL;
    return stack;
}

StackNode *createStackNode(StackEntry item)
{
    StackNode *node = (StackNode *)malloc(sizeof(StackNode));
    node->entry = item;
    return node;
}

void push(StackEntry item, Stack *stack)
{
    StackNode *node = createStackNode(item);
    if (!stack->head)
        stack->tail = node; //isEmpty
    node->next = stack->head;
    stack->head = node;
}

StackEntry pop(Stack *stack)
{
    StackEntry popped = INT_MIN;
    if (!stack->head) //isEmpty
    {
        perror("Error: current stack is empty");
        return popped;
    }
    StackNode *temp = stack->head;
    stack->head = stack->head->next;
    popped = temp->entry;
    free(temp);
    return popped;
}
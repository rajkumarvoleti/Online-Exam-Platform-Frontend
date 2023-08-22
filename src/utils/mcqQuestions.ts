import { IQuestionAndAnswer } from "@/interfaces/examInterfaces";

const neuralNetworkQuestion: IQuestionAndAnswer[] = [
  {
    topicId: 1,
    complexity: "easy",
    question: "What is the basic unit of a neural network?",
    answer: {
      type: "multipleChoice",
      description: "What is the basic unit of a neural network?",
      options: [
        { description: "Neuron", isCorrect: true },
        { description: "Node", isCorrect: false },
        { description: "Cell", isCorrect: false },
        { description: "Unit", isCorrect: false },
      ],
      explanation: "A neuron is the fundamental unit of a neural network.",
    },
  },
  {
    topicId: 1,
    complexity: "easy",
    question: "Which activation function is commonly used in neural networks?",
    answer: {
      type: "multipleChoice",
      description: "Which activation function is commonly used in neural networks?",
      options: [
        { description: "Sigmoid", isCorrect: true },
        { description: "Step", isCorrect: false },
        { description: "Linear", isCorrect: false },
        { description: "Exponential", isCorrect: false },
      ],
      explanation: "Sigmoid activation function is commonly used to introduce non-linearity.",
    },
  },
  {
    topicId: 1,
    complexity: "medium",
    question: "Which layer of a neural network typically performs feature extraction?",
    answer: {
      type: "multipleChoice",
      description: "Which layer of a neural network typically performs feature extraction?",
      options: [
        { description: "Input Layer", isCorrect: false },
        { description: "Output Layer", isCorrect: false },
        { description: "Hidden Layer", isCorrect: true },
        { description: "Activation Layer", isCorrect: false },
      ],
      explanation: "Hidden layers are responsible for feature extraction and transformation.",
    },
  },
  {
    topicId: 1,
    complexity: "medium",
    question: "What is backpropagation in the context of neural networks?",
    answer: {
      type: "multipleChoice",
      description: "What is backpropagation in the context of neural networks?",
      options: [
        { description: "The process of optimizing hyperparameters", isCorrect: false },
        { description: "The process of adjusting weights based on errors", isCorrect: true },
        { description: "The process of visualizing neural network activations", isCorrect: false },
        { description: "The process of creating new layers in a neural network", isCorrect: false },
      ],
      explanation: "Backpropagation involves adjusting weights to minimize prediction errors.",
    },
  },
  {
    topicId: 1,
    complexity: "hard",
    question: "What is the vanishing gradient problem in neural networks?",
    answer: {
      type: "multipleChoice",
      description: "What is the vanishing gradient problem in neural networks?",
      options: [
        { description: "A slow convergence rate during training", isCorrect: false },
        { description: "A sudden explosion of gradient values", isCorrect: false },
        { description: "The loss function reaching a plateau", isCorrect: false },
        { description: "Gradients becoming too small during deep network training", isCorrect: true },
      ],
      explanation: "The vanishing gradient problem hinders the training of deep networks due to small gradients.",
    },
  },
  {
    topicId: 1,
    complexity: "hard",
    question: "What is a convolutional neural network (CNN) primarily designed for?",
    answer: {
      type: "multipleChoice",
      description: "What is a convolutional neural network (CNN) primarily designed for?",
      options: [
        { description: "Text classification", isCorrect: false },
        { description: "Image and video analysis", isCorrect: true },
        { description: "Speech recognition", isCorrect: false },
        { description: "Time series forecasting", isCorrect: false },
      ],
      explanation: "CNNs are specialized for processing grid-like data, such as images and videos.",
    },
  },
  {
    topicId: 1,
    complexity: "easy",
    question: "What is the purpose of the bias term in a neural network?",
    answer: {
      type: "multipleChoice",
      description: "What is the purpose of the bias term in a neural network?",
      options: [
        { description: "To balance the network's performance", isCorrect: false },
        { description: "To introduce randomness during training", isCorrect: false },
        { description: "To offset the weighted sum before activation", isCorrect: true },
        { description: "To make the network more resistant to noise", isCorrect: false },
      ],
      explanation: "The bias term helps adjust the output of a neuron and shift the decision boundary.",
    },
  },
  {
    topicId: 1,
    complexity: "medium",
    question: "What is the purpose of a max-pooling layer in a convolutional neural network?",
    answer: {
      type: "multipleChoice",
      description: "What is the purpose of a max-pooling layer in a convolutional neural network?",
      options: [
        { description: "To increase the spatial dimensions of the feature maps", isCorrect: false },
        { description: "To introduce non-linearity to the network", isCorrect: false },
        { description: "To downsample the feature maps and retain important information", isCorrect: true },
        { description: "To add additional convolutional filters", isCorrect: false },
      ],
      explanation: "Max-pooling reduces the spatial dimensions while preserving important features.",
    },
  },
  {
    topicId: 1,
    complexity: "hard",
    question: "What is a recurrent neural network (RNN) primarily designed for?",
    answer: {
      type: "multipleChoice",
      description: "What is a recurrent neural network (RNN) primarily designed for?",
      options: [
        { description: "Image segmentation", isCorrect: false },
        { description: "Time series analysis and sequence data", isCorrect: true },
        { description: "Language translation", isCorrect: false },
        { description: "Graph-based data", isCorrect: false },
      ],
      explanation: "RNNs are designed to process sequential data and maintain internal memory.",
    },
  },
  {
    topicId: 1,
    complexity: "medium",
    question: "What is the purpose of dropout in neural networks?",
    answer: {
      type: "multipleChoice",
      description: "What is the purpose of dropout in neural networks?",
      options: [
        { description: "To add noise to the input data", isCorrect: false },
        { description: "To prevent overfitting by randomly deactivating neurons", isCorrect: true },
        { description: "To accelerate the training process", isCorrect: false },
        { description: "To increase the complexity of the network", isCorrect: false },
      ],
      explanation: "Dropout helps prevent overfitting by reducing co-dependency among neurons.",
    },
  },
  {
    topicId: 1,
    complexity: "medium",
    question: "What is the purpose of the activation function in a neural network?",
    answer: {
      type: "multipleChoice",
      description: "What is the purpose of the activation function in a neural network?",
      options: [
        { description: "To control the learning rate of the network", isCorrect: false },
        { description: "To add regularization to the model", isCorrect: false },
        { description: "To compute the gradient of the loss function", isCorrect: false },
        { description: "To introduce non-linearity to the network", isCorrect: true },
      ],
      explanation: "Activation functions introduce non-linearity, enabling neural networks to learn complex relationships.",
    },
  },
  {
    topicId: 1,
    complexity: "hard",
    question: "What is the difference between supervised and unsupervised learning?",
    answer: {
      type: "multipleChoice",
      description: "What is the difference between supervised and unsupervised learning?",
      options: [
        { description: "Supervised learning uses labeled data, while unsupervised learning uses unlabeled data.", isCorrect: true },
        { description: "Supervised learning is used for clustering, while unsupervised learning is used for classification.", isCorrect: false },
        { description: "Unsupervised learning requires a predefined target variable.", isCorrect: false },
        { description: "Supervised learning does not involve neural networks.", isCorrect: false },
      ],
      explanation: "In supervised learning, the model learns from labeled data, while in unsupervised learning, the model identifies patterns in unlabeled data.",
    },
  },
  {
    topicId: 1,
    complexity: "easy",
    question: "What is the purpose of the softmax function in the output layer of a neural network?",
    answer: {
      type: "multipleChoice",
      description: "What is the purpose of the softmax function in the output layer of a neural network?",
      options: [
        { description: "To add non-linearity to the output", isCorrect: false },
        { description: "To calculate the weighted sum of inputs", isCorrect: false },
        { description: "To determine the number of hidden layers", isCorrect: false },
        { description: "To convert raw scores into probability distribution", isCorrect: true },
      ],
      explanation: "The softmax function converts raw scores into probabilities, making it suitable for multi-class classification.",
    },
  },
  {
    topicId: 1,
    complexity: "medium",
    question: "What is the concept of transfer learning in neural networks?",
    answer: {
      type: "multipleChoice",
      description: "What is the concept of transfer learning in neural networks?",
      options: [
        { description: "Transferring data between different network layers", isCorrect: false },
        { description: "Transferring training data from one model to another", isCorrect: false },
        { description: "Transferring knowledge from a pre-trained model to a new task", isCorrect: true },
        { description: "Transferring hyperparameters between neural networks", isCorrect: false },
      ],
      explanation: "Transfer learning involves leveraging knowledge from a pre-trained model to improve performance on a new task.",
    },
  },
];

const mlAlgorithmQuestions: IQuestionAndAnswer[] = [
  {
    topicId: 2,
    complexity: "easy",
    question: "Which machine learning algorithm is used for classification tasks and is based on Bayes' theorem?",
    answer: {
      type: "multipleChoice",
      description: "Which machine learning algorithm is used for classification tasks and is based on Bayes' theorem?",
      options: [
        { description: "Decision Tree", isCorrect: false },
        { description: "Support Vector Machine", isCorrect: false },
        { description: "Naive Bayes", isCorrect: true },
        { description: "K-Means", isCorrect: false },
      ],
      explanation: "Naive Bayes is a probabilistic algorithm used for classification based on Bayes' theorem.",
    },
  },
  {
    topicId: 2,
    complexity: "easy",
    question: "Which machine learning algorithm aims to find patterns in unlabeled data through data grouping?",
    answer: {
      type: "multipleChoice",
      description: "Which machine learning algorithm aims to find patterns in unlabeled data through data grouping?",
      options: [
        { description: "Random Forest", isCorrect: false },
        { description: "K-Means", isCorrect: true },
        { description: "Logistic Regression", isCorrect: false },
        { description: "Decision Tree", isCorrect: false },
      ],
      explanation: "K-Means is a clustering algorithm that groups similar data points together.",
    },
  },
  {
    topicId: 2,
    complexity: "medium",
    question: "Which machine learning algorithm adjusts model parameters through gradient descent to minimize a loss function?",
    answer: {
      type: "multipleChoice",
      description: "Which machine learning algorithm adjusts model parameters through gradient descent to minimize a loss function?",
      options: [
        { description: "Support Vector Machine", isCorrect: false },
        { description: "K-Nearest Neighbors", isCorrect: false },
        { description: "Random Forest", isCorrect: false },
        { description: "Linear Regression", isCorrect: true },
      ],
      explanation: "Linear Regression uses gradient descent to optimize model parameters for the best fit.",
    },
  },
  {
    topicId: 2,
    complexity: "medium",
    question: "Which machine learning algorithm aims to find the best decision boundary to separate data into classes?",
    answer: {
      type: "multipleChoice",
      description: "Which machine learning algorithm aims to find the best decision boundary to separate data into classes?",
      options: [
        { description: "K-Nearest Neighbors", isCorrect: false },
        { description: "Support Vector Machine", isCorrect: true },
        { description: "Random Forest", isCorrect: false },
        { description: "Naive Bayes", isCorrect: false },
      ],
      explanation: "Support Vector Machine finds the optimal hyperplane to separate data into classes.",
    },
  },
  {
    topicId: 2,
    complexity: "hard",
    question: "Which machine learning algorithm combines multiple weak learners to create a strong ensemble model?",
    answer: {
      type: "multipleChoice",
      description: "Which machine learning algorithm combines multiple weak learners to create a strong ensemble model?",
      options: [
        { description: "Logistic Regression", isCorrect: false },
        { description: "Decision Tree", isCorrect: false },
        { description: "Random Forest", isCorrect: true },
        { description: "K-Means", isCorrect: false },
      ],
      explanation: "Random Forest is an ensemble algorithm that combines multiple decision trees for improved performance.",
    },
  },{
    topicId: 2,
    complexity: "medium",
    question: "Which machine learning algorithm is used for both classification and regression tasks and is inspired by how neurons work in the brain?",
    answer: {
      type: "multipleChoice",
      description: "Which machine learning algorithm is used for both classification and regression tasks and is inspired by how neurons work in the brain?",
      options: [
        { description: "Random Forest", isCorrect: false },
        { description: "K-Nearest Neighbors", isCorrect: false },
        { description: "Artificial Neural Network", isCorrect: true },
        { description: "Naive Bayes", isCorrect: false },
      ],
      explanation: "Artificial Neural Networks are inspired by the structure and function of the human brain's neurons.",
    },
  },
  {
    topicId: 2,
    complexity: "hard",
    question: "Which machine learning algorithm uses the concept of 'bagging' to improve model accuracy?",
    answer: {
      type: "multipleChoice",
      description: "Which machine learning algorithm uses the concept of 'bagging' to improve model accuracy?",
      options: [
        { description: "K-Means", isCorrect: false },
        { description: "Support Vector Machine", isCorrect: false },
        { description: "Decision Tree", isCorrect: false },
        { description: "Random Forest", isCorrect: true },
      ],
      explanation: "Random Forest uses bagging (Bootstrap Aggregating) to create an ensemble of decision trees.",
    },
  },
  {
    topicId: 2,
    complexity: "medium",
    question: "Which machine learning algorithm is used for dimensionality reduction while preserving the most important information?",
    answer: {
      type: "multipleChoice",
      description: "Which machine learning algorithm is used for dimensionality reduction while preserving the most important information?",
      options: [
        { description: "Principal Component Analysis (PCA)", isCorrect: true },
        { description: "Logistic Regression", isCorrect: false },
        { description: "K-Nearest Neighbors", isCorrect: false },
        { description: "Gradient Boosting", isCorrect: false },
      ],
      explanation: "Principal Component Analysis (PCA) reduces the number of features while retaining key information.",
    },
  },
  {
    topicId: 2,
    complexity: "hard",
    question: "Which machine learning algorithm uses a probabilistic graphical model to represent variables and their dependencies?",
    answer: {
      type: "multipleChoice",
      description: "Which machine learning algorithm uses a probabilistic graphical model to represent variables and their dependencies?",
      options: [
        { description: "Hidden Markov Model", isCorrect: true },
        { description: "Support Vector Machine", isCorrect: false },
        { description: "K-Means", isCorrect: false },
        { description: "Artificial Neural Network", isCorrect: false },
      ],
      explanation: "Hidden Markov Models are used to model sequences of observations with underlying states.",
    },
  },
  {
    topicId: 2,
    complexity: "medium",
    question: "Which machine learning algorithm aims to find the optimal clustering of data points by minimizing the sum of squared distances?",
    answer: {
      type: "multipleChoice",
      description: "Which machine learning algorithm aims to find the optimal clustering of data points by minimizing the sum of squared distances?",
      options: [
        { description: "K-Nearest Neighbors", isCorrect: false },
        { description: "K-Means", isCorrect: true },
        { description: "Support Vector Machine", isCorrect: false },
        { description: "Random Forest", isCorrect: false },
      ],
      explanation: "K-Means clustering minimizes the sum of squared distances between data points and cluster centroids.",
    },
  },{
    topicId: 2,
    complexity: "medium",
    question: "Which machine learning algorithm is often used for image recognition and is inspired by the visual cortex?",
    answer: {
      type: "multipleChoice",
      description: "Which machine learning algorithm is often used for image recognition and is inspired by the visual cortex?",
      options: [
        { description: "Random Forest", isCorrect: false },
        { description: "Support Vector Machine", isCorrect: false },
        { description: "Convolutional Neural Network (CNN)", isCorrect: true },
        { description: "K-Means", isCorrect: false },
      ],
      explanation: "Convolutional Neural Networks (CNNs) are designed for tasks like image recognition and classification.",
    },
  },
  {
    topicId: 2,
    complexity: "hard",
    question: "Which machine learning algorithm is used for ranking and recommendation systems?",
    answer: {
      type: "multipleChoice",
      description: "Which machine learning algorithm is used for ranking and recommendation systems?",
      options: [
        { description: "Linear Regression", isCorrect: false },
        { description: "Decision Tree", isCorrect: false },
        { description: "Collaborative Filtering", isCorrect: true },
        { description: "Naive Bayes", isCorrect: false },
      ],
      explanation: "Collaborative Filtering is commonly used for building recommendation systems.",
    },
  },
  {
    topicId: 2,
    complexity: "medium",
    question: "Which machine learning algorithm is designed to learn a mapping between inputs and outputs?",
    answer: {
      type: "multipleChoice",
      description: "Which machine learning algorithm is designed to learn a mapping between inputs and outputs?",
      options: [
        { description: "K-Nearest Neighbors", isCorrect: false },
        { description: "Support Vector Machine", isCorrect: false },
        { description: "Random Forest", isCorrect: false },
        { description: "Artificial Neural Network", isCorrect: true },
      ],
      explanation: "Artificial Neural Networks can learn complex mappings between inputs and outputs.",
    },
  },
  {
    topicId: 2,
    complexity: "hard",
    question: "Which machine learning algorithm is known for handling sequential data and has variants like LSTM and GRU?",
    answer: {
      type: "multipleChoice",
      description: "Which machine learning algorithm is known for handling sequential data and has variants like LSTM and GRU?",
      options: [
        { description: "Support Vector Machine", isCorrect: false },
        { description: "K-Means", isCorrect: false },
        { description: "Reinforcement Learning", isCorrect: false },
        { description: "Recurrent Neural Network (RNN)", isCorrect: true },
      ],
      explanation: "Recurrent Neural Networks (RNNs) are used for sequential data and have specialized variants like LSTM and GRU.",
    },
  },
  {
    topicId: 2,
    complexity: "medium",
    question: "Which machine learning algorithm is used for both regression and classification tasks, and creates a decision boundary as a linear combination of features?",
    answer: {
      type: "multipleChoice",
      description: "Which machine learning algorithm is used for both regression and classification tasks, and creates a decision boundary as a linear combination of features?",
      options: [
        { description: "Support Vector Machine", isCorrect: false },
        { description: "Logistic Regression", isCorrect: true },
        { description: "Random Forest", isCorrect: false },
        { description: "K-Means", isCorrect: false },
      ],
      explanation: "Logistic Regression creates a decision boundary using a linear combination of input features.",
    },
  },
];

const nlpQuestions: IQuestionAndAnswer[] = [
  {
    topicId: 3,
    complexity: "easy",
    question: "What is the primary goal of Natural Language Processing (NLP)?",
    answer: {
      type: "multipleChoice",
      description: "What is the primary goal of Natural Language Processing (NLP)?",
      options: [
        { description: "To enable computers to understand and generate human language", isCorrect: true },
        { description: "To improve hardware performance", isCorrect: false },
        { description: "To develop advanced graphics for video games", isCorrect: false },
        { description: "To create virtual reality environments", isCorrect: false },
      ],
      explanation: "NLP aims to enable computers to process, understand, and generate human language.",
    },
  },
  {
    topicId: 3,
    complexity: "easy",
    question: "Which NLP task involves determining the syntactic structure of a sentence?",
    answer: {
      type: "multipleChoice",
      description: "Which NLP task involves determining the syntactic structure of a sentence?",
      options: [
        { description: "Named Entity Recognition (NER)", isCorrect: false },
        { description: "Sentiment Analysis", isCorrect: false },
        { description: "Part-of-Speech Tagging (POS)", isCorrect: true },
        { description: "Machine Translation", isCorrect: false },
      ],
      explanation: "Part-of-Speech Tagging involves assigning grammatical labels to words in a sentence.",
    },
  },
  {
    topicId: 3,
    complexity: "medium",
    question: "Which NLP task focuses on classifying text into predefined categories or classes?",
    answer: {
      type: "multipleChoice",
      description: "Which NLP task focuses on classifying text into predefined categories or classes?",
      options: [
        { description: "Named Entity Recognition (NER)", isCorrect: false },
        { description: "Text Summarization", isCorrect: false },
        { description: "Topic Modeling", isCorrect: false },
        { description: "Text Classification", isCorrect: true },
      ],
      explanation: "Text Classification involves assigning predefined categories to text based on content.",
    },
  },
  {
    topicId: 3,
    complexity: "medium",
    question: "What is the purpose of Named Entity Recognition (NER) in NLP?",
    answer: {
      type: "multipleChoice",
      description: "What is the purpose of Named Entity Recognition (NER) in NLP?",
      options: [
        { description: "To identify verbs in a sentence", isCorrect: false },
        { description: "To determine the sentiment of a text", isCorrect: false },
        { description: "To extract and classify named entities (e.g., names, dates) in text", isCorrect: true },
        { description: "To generate summaries of long documents", isCorrect: false },
      ],
      explanation: "NER is used to locate and categorize named entities within text, such as names, dates, and locations.",
    },
  },
  {
    topicId: 3,
    complexity: "hard",
    question: "Which NLP approach involves teaching machines to translate text from one language to another?",
    answer: {
      type: "multipleChoice",
      description: "Which NLP approach involves teaching machines to translate text from one language to another?",
      options: [
        { description: "Sentiment Analysis", isCorrect: false },
        { description: "Part-of-Speech Tagging (POS)", isCorrect: false },
        { description: "Machine Translation", isCorrect: true },
        { description: "Text Classification", isCorrect: false },
      ],
      explanation: "Machine Translation is the task of automatically translating text from one language to another.",
    },
  },
  {
    topicId: 3,
    complexity: "medium",
    question: "Which NLP task involves determining the sentiment expressed in a piece of text?",
    answer: {
      type: "multipleChoice",
      description: "Which NLP task involves determining the sentiment expressed in a piece of text?",
      options: [
        { description: "Named Entity Recognition (NER)", isCorrect: false },
        { description: "Text Classification", isCorrect: false },
        { description: "Sentiment Analysis", isCorrect: true },
        { description: "Topic Modeling", isCorrect: false },
      ],
      explanation: "Sentiment Analysis aims to identify the emotional tone expressed in text.",
    },
  },
  {
    topicId: 3,
    complexity: "hard",
    question: "What is the purpose of Lemmatization in NLP?",
    answer: {
      type: "multipleChoice",
      description: "What is the purpose of Lemmatization in NLP?",
      options: [
        { description: "To identify syntactic dependencies in a sentence", isCorrect: false },
        { description: "To translate text from one language to another", isCorrect: false },
        { description: "To reduce words to their base or dictionary form", isCorrect: true },
        { description: "To classify text into predefined categories", isCorrect: false },
      ],
      explanation: "Lemmatization reduces words to their base form, aiding in text analysis and processing.",
    },
  },
  {
    topicId: 3,
    complexity: "medium",
    question: "Which NLP technique involves representing words as dense vectors to capture semantic meaning?",
    answer: {
      type: "multipleChoice",
      description: "Which NLP technique involves representing words as dense vectors to capture semantic meaning?",
      options: [
        { description: "One-Hot Encoding", isCorrect: false },
        { description: "Bag-of-Words", isCorrect: false },
        { description: "Word2Vec", isCorrect: true },
        { description: "TF-IDF", isCorrect: false },
      ],
      explanation: "Word2Vec represents words as continuous vectors, capturing semantic relationships.",
    },
  },
  {
    topicId: 3,
    complexity: "hard",
    question: "What is the primary goal of Word Embeddings in NLP?",
    answer: {
      type: "multipleChoice",
      description: "What is the primary goal of Word Embeddings in NLP?",
      options: [
        { description: "To perform sentiment analysis on text", isCorrect: false },
        { description: "To generate summaries of long documents", isCorrect: false },
        { description: "To map words to their corresponding parts of speech", isCorrect: false },
        { description: "To capture semantic relationships between words", isCorrect: true },
      ],
      explanation: "Word Embeddings aim to capture semantic meaning and relationships between words.",
    },
  },
  {
    topicId: 3,
    complexity: "medium",
    question: "Which NLP task involves predicting the next word in a sequence of words?",
    answer: {
      type: "multipleChoice",
      description: "Which NLP task involves predicting the next word in a sequence of words?",
      options: [
        { description: "Named Entity Recognition (NER)", isCorrect: false },
        { description: "Text Classification", isCorrect: false },
        { description: "Text Summarization", isCorrect: false },
        { description: "Language Modeling", isCorrect: true },
      ],
      explanation: "Language Modeling predicts the probability distribution of words in a sequence.",
    },
  }, {
    topicId: 3,
    complexity: "medium",
    question: "What is the main purpose of a Word Cloud in NLP?",
    answer: {
      type: "multipleChoice",
      description: "What is the main purpose of a Word Cloud in NLP?",
      options: [
        { description: "To summarize a lengthy text document", isCorrect: false },
        { description: "To perform sentiment analysis on social media posts", isCorrect: false },
        { description: "To visualize the frequency of words in a text", isCorrect: true },
        { description: "To generate grammatically correct sentences", isCorrect: false },
      ],
      explanation: "A Word Cloud visually represents the frequency of words in a text, with larger words indicating higher frequency.",
    },
  },
  {
    topicId: 3,
    complexity: "hard",
    question: "Which NLP task involves breaking down a text into its component sentences and words?",
    answer: {
      type: "multipleChoice",
      description: "Which NLP task involves breaking down a text into its component sentences and words?",
      options: [
        { description: "Text Classification", isCorrect: false },
        { description: "Tokenization", isCorrect: true },
        { description: "Sentiment Analysis", isCorrect: false },
        { description: "Language Modeling", isCorrect: false },
      ],
      explanation: "Tokenization involves segmenting text into sentences and words for further analysis.",
    },
  },
  {
    topicId: 3,
    complexity: "medium",
    question: "Which NLP technique involves assigning a weight to each word based on its importance in a document?",
    answer: {
      type: "multipleChoice",
      description: "Which NLP technique involves assigning a weight to each word based on its importance in a document?",
      options: [
        { description: "Part-of-Speech Tagging (POS)", isCorrect: false },
        { description: "Named Entity Recognition (NER)", isCorrect: false },
        { description: "TF-IDF", isCorrect: true },
        { description: "Word2Vec", isCorrect: false },
      ],
      explanation: "TF-IDF (Term Frequency-Inverse Document Frequency) assigns weights to words based on their significance in a document collection.",
    },
  },
  {
    topicId: 3,
    complexity: "hard",
    question: "Which NLP task involves generating a coherent and concise summary of a longer text?",
    answer: {
      type: "multipleChoice",
      description: "Which NLP task involves generating a coherent and concise summary of a longer text?",
      options: [
        { description: "Text Classification", isCorrect: false },
        { description: "Sentiment Analysis", isCorrect: false },
        { description: "Named Entity Recognition (NER)", isCorrect: false },
        { description: "Text Summarization", isCorrect: true },
      ],
      explanation: "Text Summarization aims to create a concise and informative summary of a longer text.",
    },
  },
  {
    topicId: 3,
    complexity: "medium",
    question: "What is the primary goal of Dependency Parsing in NLP?",
    answer: {
      type: "multipleChoice",
      description: "What is the primary goal of Dependency Parsing in NLP?",
      options: [
        { description: "To identify named entities in a text", isCorrect: false },
        { description: "To predict the sentiment of a sentence", isCorrect: false },
        { description: "To determine the syntactic relationship between words in a sentence", isCorrect: true },
        { description: "To perform machine translation between languages", isCorrect: false },
      ],
      explanation: "Dependency Parsing analyzes the grammatical structure and relationships between words in a sentence.",
    },
  },
];

const linkedListQuestions: IQuestionAndAnswer[] = [
  {
    topicId: 4,
    complexity: "easy",
    question: "What is a linked list?",
    answer: {
      type: "multipleChoice",
      description: "A linked list is:",
      options: [
        { description: "A linear data structure", isCorrect: true },
        { description: "A circular data structure", isCorrect: false },
        { description: "A two-dimensional data structure", isCorrect: false },
        { description: "A tree-like data structure", isCorrect: false },
      ],
      explanation: "A linked list is a linear data structure where elements are connected using pointers."
    }
  },
  {
    topicId: 4,
    complexity: "easy",
    question: "What is a node in a linked list?",
    answer: {
      type: "multipleChoice",
      description: "A node in a linked list represents:",
      options: [
        { description: "A single element of the linked list", isCorrect: true },
        { description: "The entire linked list", isCorrect: false },
        { description: "A type of pointer", isCorrect: false },
        { description: "A mathematical operation", isCorrect: false },
      ],
      explanation: "A node in a linked list holds a single element and contains a reference to the next node in the sequence."
    }
  },{
    topicId: 4,
    complexity: "easy",
    question: "Which of the following is an advantage of linked lists over arrays?",
    answer: {
      type: "multipleChoice",
      description: "An advantage of linked lists over arrays is:",
      options: [
        { description: "Constant-time access to elements", isCorrect: false },
        { description: "Fixed size", isCorrect: false },
        { description: "Efficient insertion and deletion at any position", isCorrect: true },
        { description: "Low memory usage", isCorrect: false },
      ],
      explanation: "Linked lists allow efficient insertion and deletion at any position without the need to shift elements, unlike arrays."
    }
  },
  {
    topicId: 4,
    complexity: "medium",
    question: "What is a doubly linked list?",
    answer: {
      type: "multipleChoice",
      description: "A doubly linked list:",
      options: [
        { description: "Has nodes with only one reference to the next node", isCorrect: false },
        { description: "Contains nodes with references to both the previous and next nodes", isCorrect: true },
        { description: "Stores data in a circular arrangement", isCorrect: false },
        { description: "Allows traversal in only one direction", isCorrect: false },
      ],
      explanation: "A doubly linked list contains nodes that have references to both the previous and next nodes, enabling bidirectional traversal."
    }
  },
  {
    topicId: 4,
    complexity: "medium",
    question: "What is the time complexity for inserting an element at the beginning of a linked list?",
    answer: {
      type: "multipleChoice",
      description: "The time complexity to insert at the beginning of a linked list is:",
      options: [
        { description: "O(1)", isCorrect: true },
        { description: "O(n)", isCorrect: false },
        { description: "O(log n)", isCorrect: false },
        { description: "O(n log n)", isCorrect: false },
      ],
      explanation: "Inserting an element at the beginning of a linked list requires updating only a few pointers, resulting in constant time complexity."
    }
  },{
    topicId: 4,
    complexity: "medium",
    question: "Which of the following operations requires O(n) time in a singly linked list?",
    answer: {
      type: "multipleChoice",
      description: "An operation that requires O(n) time in a singly linked list is:",
      options: [
        { description: "Inserting an element at the end", isCorrect: true },
        { description: "Inserting an element at the beginning", isCorrect: false },
        { description: "Deleting an element at the end", isCorrect: false },
        { description: "Finding the middle element", isCorrect: false },
      ],
      explanation: "To insert an element at the end of a singly linked list, you must traverse the entire list to find the last node, resulting in O(n) time complexity."
    }
  },
  {
    topicId: 4,
    complexity: "medium",
    question: "What is a tail pointer in a linked list?",
    answer: {
      type: "multipleChoice",
      description: "A tail pointer in a linked list:",
      options: [
        { description: "Points to the first node", isCorrect: false },
        { description: "Points to the middle node", isCorrect: false },
        { description: "Points to the last node", isCorrect: true },
        { description: "Points to a random node", isCorrect: false },
      ],
      explanation: "A tail pointer in a linked list refers to the last node of the list, allowing efficient insertion at the end without traversing the entire list."
    }
  },
  {
    topicId: 4,
    complexity: "hard",
    question: "What is a self-adjusting linked list?",
    answer: {
      type: "multipleChoice",
      description: "A self-adjusting linked list is designed to:",
      options: [
        { description: "Automatically sort its elements", isCorrect: false },
        { description: "Rebalance itself during insertions", isCorrect: false },
        { description: "Rearrange its elements for cache optimization", isCorrect: false },
        { description: "Prioritize frequently accessed elements", isCorrect: true },
      ],
      explanation: "A self-adjusting linked list reorders its elements based on access patterns to optimize for frequently accessed elements."
    }
  },
];

const binaryTreeMcqQuestions: IQuestionAndAnswer[] = [
  {
    topicId: 5,
    complexity: "easy",
    question: "What is a binary tree?",
    answer: {
      type: "multipleChoice",
      description: "A binary tree is a tree structure where each node has:",
      options: [
        { description: "Two children or less", isCorrect: true },
        { description: "Exactly two children", isCorrect: false },
        { description: "Three children", isCorrect: false },
        { description: "No children", isCorrect: false },
      ],
      explanation: "In a binary tree, each node can have at most two children, referred to as the left child and the right child."
    }
  },
  {
    topicId: 5,
    complexity: "easy",
    question: "What is the height of a binary tree?",
    answer: {
      type: "multipleChoice",
      description: "The height of a binary tree is the maximum:",
      options: [
        { description: "Number of nodes in the tree", isCorrect: false },
        { description: "Depth of the tree", isCorrect: true },
        { description: "Number of edges in the longest path", isCorrect: false },
        { description: "Number of levels in the tree", isCorrect: false },
      ],
      explanation: "The height of a binary tree is the maximum depth of the tree, which is the length of the longest path from the root to a leaf node."
    }
  },
  {
    topicId: 5,
    complexity: "medium",
    question: "What is an AVL tree?",
    answer: {
      type: "multipleChoice",
      description: "An AVL tree is a self-balancing binary search tree where the difference between the heights of its subtrees is at most:",
      options: [
        { description: "1", isCorrect: true },
        { description: "2", isCorrect: false },
        { description: "3", isCorrect: false },
        { description: "4", isCorrect: false },
      ],
      explanation: "In an AVL tree, the heights of the left and right subtrees of any node differ by at most 1, ensuring balanced structure."
    }
  },{
    topicId: 5,
    complexity: "medium",
    question: "What is a complete binary tree?",
    answer: {
      type: "multipleChoice",
      description: "A complete binary tree is a tree where all levels are filled, except possibly the:",
      options: [
        { description: "First level", isCorrect: false },
        { description: "Last level", isCorrect: true },
        { description: "Middle levels", isCorrect: false },
        { description: "Even levels", isCorrect: false },
      ],
      explanation: "In a complete binary tree, all levels are filled except possibly the last level, which is filled from left to right."
    }
  },
  {
    topicId: 5,
    complexity: "medium",
    question: "Which traversal visits the root node after its left and right subtrees?",
    answer: {
      type: "multipleChoice",
      description: "The traversal that visits the root node after its left and right subtrees is:",
      options: [
        { description: "In-order traversal", isCorrect: false },
        { description: "Pre-order traversal", isCorrect: true },
        { description: "Post-order traversal", isCorrect: false },
        { description: "Level-order traversal", isCorrect: false },
      ],
      explanation: "In a pre-order traversal, the root node is visited before its left and right subtrees."
    }
  },
  {
    topicId: 5,
    complexity: "hard",
    question: "What is a binary heap?",
    answer: {
      type: "multipleChoice",
      description: "A binary heap is a complete binary tree with the:",
      options: [
        { description: "Maximum element at the root", isCorrect: true },
        { description: "Minimum element at the root", isCorrect: false },
        { description: "Equal elements at all levels", isCorrect: false },
        { description: "Balanced structure", isCorrect: false },
      ],
      explanation: "In a max binary heap, the maximum element is at the root, and for a min binary heap, the minimum element is at the root."
    }
  }, {
    topicId: 5,
    complexity: "hard",
    question: "What is the time complexity of searching in a balanced binary search tree?",
    answer: {
      type: "multipleChoice",
      description: "The time complexity of searching in a balanced binary search tree is:",
      options: [
        { description: "O(1)", isCorrect: false },
        { description: "O(log n)", isCorrect: true },
        { description: "O(n)", isCorrect: false },
        { description: "O(n log n)", isCorrect: false },
      ],
      explanation: "In a balanced binary search tree, the height is logarithmic with respect to the number of nodes, resulting in O(log n) time complexity for searching."
    }
  },
  {
    topicId: 5,
    complexity: "medium",
    question: "What is the main advantage of a binary search tree over a linked list?",
    answer: {
      type: "multipleChoice",
      description: "The main advantage of a binary search tree over a linked list is:",
      options: [
        { description: "Constant-time insertion and deletion", isCorrect: false },
        { description: "Faster traversal", isCorrect: false },
        { description: "Better memory utilization", isCorrect: false },
        { description: "Efficient searching and sorting", isCorrect: true },
      ],
      explanation: "A binary search tree allows for efficient searching and sorting of elements, which is not possible with a simple linked list."
    }
  },
  {
    topicId: 5,
    complexity: "hard",
    question: "What is a binary search tree with all elements greater than the root called?",
    answer: {
      type: "multipleChoice",
      description: "A binary search tree with all elements greater than the root is called a:",
      options: [
        { description: "Max binary search tree", isCorrect: false },
        { description: "Min binary search tree", isCorrect: true },
        { description: "Balanced binary search tree", isCorrect: false },
        { description: "Complete binary search tree", isCorrect: false },
      ],
      explanation: "In a min binary search tree, all elements in the tree are greater than the root node."
    }
  },
];

const sortingAlgorithmsMcqQuestions: IQuestionAndAnswer[] = [
  {
    topicId: 6,
    complexity: "easy",
    question: "Which sorting algorithm has an average-case time complexity of O(n log n)?",
    answer: {
      type: "multipleChoice",
      description: "The sorting algorithm with an average-case time complexity of O(n log n) is:",
      options: [
        { description: "Bubble Sort", isCorrect: false },
        { description: "Insertion Sort", isCorrect: false },
        { description: "Merge Sort", isCorrect: true },
        { description: "Selection Sort", isCorrect: false },
      ],
      explanation: "Merge Sort has an average-case time complexity of O(n log n), making it efficient for sorting large datasets."
    }
  },
  {
    topicId: 6,
    complexity: "easy",
    question: "Which sorting algorithm repeatedly steps through the list to be sorted, compares adjacent elements, and swaps them if they are in the wrong order?",
    answer: {
      type: "multipleChoice",
      description: "The sorting algorithm described is:",
      options: [
        { description: "Quick Sort", isCorrect: false },
        { description: "Bubble Sort", isCorrect: true },
        { description: "Heap Sort", isCorrect: false },
        { description: "Radix Sort", isCorrect: false },
      ],
      explanation: "Bubble Sort repeatedly compares adjacent elements and swaps them if they are in the wrong order, until the entire list is sorted."
    }
  },
  {
    topicId: 6,
    complexity: "medium",
    question: "Which sorting algorithm is known for its 'divide and conquer' strategy and is often used as a building block in other algorithms?",
    answer: {
      type: "multipleChoice",
      description: "The sorting algorithm known for its 'divide and conquer' strategy is:",
      options: [
        { description: "Merge Sort", isCorrect: true },
        { description: "Insertion Sort", isCorrect: false },
        { description: "Bubble Sort", isCorrect: false },
        { description: "Selection Sort", isCorrect: false },
      ],
      explanation: "Merge Sort uses a 'divide and conquer' approach by recursively dividing the list, sorting the sublists, and merging them back together."
    }
  },
  {
    topicId: 6,
    complexity: "medium",
    question: "Which sorting algorithm has the best average and worst-case time complexity?",
    answer: {
      type: "multipleChoice",
      description: "The sorting algorithm with the best average and worst-case time complexity is:",
      options: [
        { description: "Quick Sort", isCorrect: false },
        { description: "Heap Sort", isCorrect: false },
        { description: "Merge Sort", isCorrect: true },
        { description: "Selection Sort", isCorrect: false },
      ],
      explanation: "Merge Sort has a consistent average and worst-case time complexity of O(n log n), making it a reliable choice for sorting."
    }
  },
  {
    topicId: 6,
    complexity: "medium",
    question: "Which sorting algorithm works by repeatedly selecting the minimum element from the unsorted portion of the array and placing it at the beginning of the sorted portion?",
    answer: {
      type: "multipleChoice",
      description: "The sorting algorithm described is:",
      options: [
        { description: "Bubble Sort", isCorrect: false },
        { description: "Insertion Sort", isCorrect: false },
        { description: "Selection Sort", isCorrect: true },
        { description: "Merge Sort", isCorrect: false },
      ],
      explanation: "Selection Sort repeatedly finds the minimum element in the unsorted portion and swaps it with the first element of the sorted portion."
    }
  },
  {
    topicId: 6,
    complexity: "hard",
    question: "Which sorting algorithm has a time complexity of O(n) in the best case?",
    answer: {
      type: "multipleChoice",
      description: "The sorting algorithm with a time complexity of O(n) in the best case is:",
      options: [
        { description: "Quick Sort", isCorrect: false },
        { description: "Heap Sort", isCorrect: false },
        { description: "Merge Sort", isCorrect: false },
        { description: "Radix Sort", isCorrect: true },
      ],
      explanation: "Radix Sort can achieve a best-case time complexity of O(n) when sorting integers, making it efficient for certain scenarios."
    }
  },  {
    topicId: 6,
    complexity: "hard",
    question: "Which sorting algorithm can be used for sorting data that is already partially sorted?",
    answer: {
      type: "multipleChoice",
      description: "The sorting algorithm that works well for partially sorted data is:",
      options: [
        { description: "Merge Sort", isCorrect: false },
        { description: "Heap Sort", isCorrect: false },
        { description: "Insertion Sort", isCorrect: true },
        { description: "Quick Sort", isCorrect: false },
      ],
      explanation: "Insertion Sort has good performance for small datasets and partially sorted data due to its simple nature."
    }
  },
  {
    topicId: 6,
    complexity: "medium",
    question: "Which sorting algorithm is not a comparison-based algorithm?",
    answer: {
      type: "multipleChoice",
      description: "The sorting algorithm that is not comparison-based is:",
      options: [
        { description: "Merge Sort", isCorrect: false },
        { description: "Quick Sort", isCorrect: false },
        { description: "Heap Sort", isCorrect: false },
        { description: "Counting Sort", isCorrect: true },
      ],
      explanation: "Counting Sort is a non-comparison-based sorting algorithm that works well for integer or key-based data."
    }
  },
  {
    topicId: 6,
    complexity: "hard",
    question: "Which sorting algorithm has a space complexity of O(1)?",
    answer: {
      type: "multipleChoice",
      description: "The sorting algorithm with a space complexity of O(1) is:",
      options: [
        { description: "Merge Sort", isCorrect: false },
        { description: "Quick Sort", isCorrect: false },
        { description: "Heap Sort", isCorrect: true },
        { description: "Radix Sort", isCorrect: false },
      ],
      explanation: "Heap Sort has a space complexity of O(1), as it sorts the data in place using a binary heap data structure."
    }
  },
];


// export const mcqQuestions:IQuestionAndAnswer[] = [...neuralNetworkQuestion,...mlAlgorithmQuestions,...linkedListQuestions,...nlpQuestions,...binaryTreeMcqQuestions,...sortingAlgorithmsMcqQuestions];

export const mcqQuestions:IQuestionAndAnswer[] = sortingAlgorithmsMcqQuestions;




import React, { useState, useEffect } from 'react';
import { View, Text,PanResponder } from 'react-native';
import { GameEngine } from 'react-native-game-engine';

// Este es el componente que maneja la lógica del juego
const MyGame = () => {
  const [gameState, setGameState] = useState({
    playerX: 100,
    playerY: 100,
    playerRadius: 30,
  });

  const movePlayer = (dx, dy) => { 
    setGameState((prevState) => ({
      ...prevState,
      playerX: prevState.playerX + dx,
      playerY: prevState.playerY + dy,
    }));
  };

  useEffect(() => {
    const panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        movePlayer(gestureState.dx, gestureState.dy);
      },
      onPanResponderRelease: () => {},
    });

    return () => panResponder.remove;
  }, []);

  return (
    <GameEngine
      style={{ flex: 1 }}
      systems={[]}
      entities={{
        player: {
          position: [gameState.playerX, gameState.playerY],
          renderer: <View style={styles.player} />,
        },
      }}
    >
      <Text style={styles.scoreText}>¡Mueve el jugador!</Text>
    </GameEngine>
  );
};

const styles = {
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  player: {
    position: 'absolute',
    width: 60,
    height: 60,
    backgroundColor: '#FF6347',
    borderRadius: 30,
  },
  scoreText: {
    position: 'absolute',
    top: 30,
    left: 20,
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
};

export default MyGame;

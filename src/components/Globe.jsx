import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";

function Sphere() {
  return (
    <mesh>
      <sphereGeometry args={[2, 64, 64]} />
      <meshPhysicalMaterial
        color="#ffffff"
        roughness={0}
        transmission={1}
        transparent
        opacity={0.8}
        wireframe
      />
    </mesh>
  );
}

export default function Globe() {
  return (
    <div className="w-full max-w-[520px] aspect-square sm:max-w-[620px] lg:max-w-[700px]">
      <Canvas className="w-full h-full" camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1.5} />
        <pointLight position={[0, 0, 4]} intensity={120} color="#ffffff" />
        <pointLight position={[0, 0, 2]} intensity={60} color="#8b5cf6" />
        <Sphere />
        <Sparkles count={150} scale={8} size={3} speed={0.5} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
    </div>
  );
}

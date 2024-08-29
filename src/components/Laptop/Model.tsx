import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
    Object_5: THREE.Mesh;
    Object_6: THREE.Mesh;
    Object_7: THREE.Mesh;
    Object_8: THREE.Mesh;
    Object_9: THREE.Mesh;
    Object_10: THREE.Mesh;
    Object_11: THREE.Mesh;
    Object_12: THREE.Mesh;
    Object_13: THREE.Mesh;
    Object_15: THREE.Mesh;
    Object_17: THREE.Mesh;
    Object_18: THREE.Mesh;
    Object_19: THREE.Mesh;
    Object_20: THREE.Mesh;
    Object_21: THREE.Mesh;
    Object_23: THREE.Mesh;
    Object_25: THREE.Mesh;
    Object_26: THREE.Mesh;
    Object_28: THREE.Mesh;
  };
  materials: {
    ["Material.003"]: THREE.MeshStandardMaterial;
    ["Material.013"]: THREE.MeshStandardMaterial;
    ["Material.016"]: THREE.MeshStandardMaterial;
    ["Material.004"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Material.009"]: THREE.MeshStandardMaterial;
    ["Material.011"]: THREE.MeshStandardMaterial;
    ["Material.007"]: THREE.MeshStandardMaterial;
    ["Material.006"]: THREE.MeshStandardMaterial;
    ["Material.005"]: THREE.MeshPhysicalMaterial;
    ["Material.008"]: THREE.MeshStandardMaterial;
    ["Material.017"]: THREE.MeshStandardMaterial;
    ["Material.014"]: THREE.MeshStandardMaterial;
    ["Material.010"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/macbook_gltf/scene.gltf"
  ) as GLTFResult;
  const groupRef = useRef<THREE.Group>(null);

  // rotate the model horizontally (around y-axis)
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.007;
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group name="Sketchfab_Scene" position={[0, -1, 0]}>
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Cube_5">
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials["Material.003"]}
                />
                <mesh
                  name="Object_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_5.geometry}
                  material={materials["Material.013"]}
                />
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials["Material.016"]}
                />
                <mesh
                  name="Object_7"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_7.geometry}
                  material={materials["Material.004"]}
                />
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials["Material.002"]}
                />
                <mesh
                  name="Object_9"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_9.geometry}
                  material={materials["Material.002"]}
                />
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials["Material.002"]}
                />
                <mesh
                  name="Object_11"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_11.geometry}
                  material={materials["Material.002"]}
                />
                <mesh
                  name="Object_12"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                  material={materials["Material.009"]}
                />
                <mesh
                  name="Object_13"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_13.geometry}
                  material={materials["Material.009"]}
                />
                <group
                  name="Cube008_0"
                  position={[-1.453597, 0.085757, -0.566493]}
                >
                  <mesh
                    name="Object_15"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_15.geometry}
                    material={materials["Material.011"]}
                  />
                </group>
                <group
                  name="Cube016_2"
                  position={[0, 0.100119, -1.011944]}
                  rotation={[-1.924947, 0, 0]}
                >
                  <mesh
                    name="Object_17"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_17.geometry}
                    material={materials["Material.003"]}
                  />
                  <mesh
                    name="Object_18"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_18.geometry}
                    material={materials["Material.007"]}
                  />
                  <mesh
                    name="Object_19"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_19.geometry}
                    material={materials["Material.006"]}
                  />
                  <mesh
                    name="Object_20"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_20.geometry}
                    material={materials["Material.005"]}
                  />
                  <mesh
                    name="Object_21"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_21.geometry}
                    material={materials["Material.008"]}
                  />
                  <group
                    name="Curve_1"
                    position={[-0.033435, 0.616388, 1.019445]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                    scale={[32.944855, 32.944859, 33.487816]}
                  >
                    <mesh
                      name="Object_23"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_23.geometry}
                      material={materials["Material.017"]}
                    />
                  </group>
                </group>
                <group name="Cylinder_3">
                  <mesh
                    name="Object_25"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_25.geometry}
                    material={materials["Material.003"]}
                  />
                  <mesh
                    name="Object_26"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_26.geometry}
                    material={materials["Material.014"]}
                  />
                </group>
                <group
                  name="Cylinder001_4"
                  position={[-1.485367, 0.085757, -0.76125]}
                  rotation={[Math.PI, 0, Math.PI / 2]}
                  scale={[-0.005467, 0.005467, 0.005467]}
                >
                  <mesh
                    name="Object_28"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_28.geometry}
                    material={materials["Material.010"]}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/macbook_gltf/scene.gltf");

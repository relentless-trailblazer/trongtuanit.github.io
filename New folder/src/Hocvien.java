import java.util.Scanner;

public abstract class Hocvien {
	protected String hoTen;
	protected String diaChi;
	protected int loaiUuTien;
	
	public void nhapThongTin() {
		try {
			Scanner sc = new Scanner(System.in);
			System.out.print("Nhap ho ten: ");
			hoTen = sc.nextLine();
			
			System.out.print("Nhap dia chi: ");
			diaChi = sc.nextLine();
			
			do {
				System.out.println("Nhap vao loai uu tien(1|2): ");
				loaiUuTien = sc.nextInt();
				sc.nextLine();
				
				while (loaiUuTien!= 1 && loaiUuTien!=2) {
					System.out.println("Nhap lai loai uu tien(1|2): ");
					loaiUuTien = sc.nextInt();
					sc.nextLine();
				}
			} while (loaiUuTien!= 1 && loaiUuTien!=2);
		} catch (Exception e) {
			System.out.println("Message line 29 in class Hocvien: Loi khi nhap du lieu. Error: " + e.getStackTrace());
		}
	};
	
	public void inThongTin() {
		try {
			System.out.println("Ho ten: " + hoTen);
			System.out.println("Dia chi: " + diaChi);
			System.out.println("Loai uu tien: " + loaiUuTien);
			System.out.println("Hoc phi: " + hocPhi());
			
		} catch (Exception e) {
			System.out.println("Message line 41 in class Hocvien: Loi khi xuat du lieu. Error: " + e.getStackTrace());
		}
	}

	public Hocvien(String hoTen, String diaChi, int loaiUuTien) {
		super();
		this.hoTen = hoTen;
		this.diaChi = diaChi;
		this.loaiUuTien = loaiUuTien;
	}

	public Hocvien() {
		super();
	}
	
	public abstract int hocPhi();
	
	
	
}

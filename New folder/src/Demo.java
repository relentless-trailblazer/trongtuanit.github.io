
public class Demo {
	public static void main(String[] args) {
		System.out.println("---------------Nhap thong tin hoc vien DH---------------");
		HocvienDH a = new HocvienDH();
		a.nhapThongTinDH();
		
		System.out.println("---------------Nhap thong tin hoc vien LT---------------");
		HocvienLT b = new HocvienLT();
		b.nhapThongTinLT();
		
		System.out.println("---------------Thong tin hoc vien DH---------------");
		a.inThongTin();
		
		System.out.println("---------------Thong tin hoc vien LT---------------");
		b.inThongTin();
	}
}
